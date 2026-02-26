import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

interface PaymentScheduleItem {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
}

export default function LoanCalculator() {
  const [creditAmount, setCreditAmount] = useState(100000);
  const [annualRate, setAnnualRate] = useState(9);
  const [duration, setDuration] = useState(60);
  const [scheduleType, setScheduleType] = useState<'annuity' | 'bullet'>('annuity');

  const calculations = useMemo(() => {
    const principal = creditAmount;
    const monthlyRate = annualRate / 100 / 12;
    const months = duration;

    let monthlyPayment = 0;
    let schedule: PaymentScheduleItem[] = [];
    let totalInterest = 0;

    if (scheduleType === 'annuity') {
      // Annuity calculation: equal monthly payments
      if (monthlyRate === 0) {
        monthlyPayment = principal / months;
      } else {
        monthlyPayment =
          (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
          (Math.pow(1 + monthlyRate, months) - 1);
      }

      let balance = principal;
      for (let i = 1; i <= months; i++) {
        const interestPayment = balance * monthlyRate;
        const principalPayment = monthlyPayment - interestPayment;
        balance -= principalPayment;

        schedule.push({
          month: i,
          payment: monthlyPayment,
          principal: principalPayment,
          interest: interestPayment,
          balance: Math.max(0, balance),
        });

        totalInterest += interestPayment;
      }
    } else {
      // Bullet schedule: interest-only payments, principal at end
      monthlyPayment = principal * monthlyRate;

      for (let i = 1; i <= months; i++) {
        if (i === months) {
          // Last payment includes principal
          schedule.push({
            month: i,
            payment: monthlyPayment + principal,
            principal: principal,
            interest: monthlyPayment,
            balance: 0,
          });
          totalInterest += monthlyPayment;
        } else {
          schedule.push({
            month: i,
            payment: monthlyPayment,
            principal: 0,
            interest: monthlyPayment,
            balance: principal,
          });
          totalInterest += monthlyPayment;
        }
      }
    }

    return {
      monthlyPayment,
      totalPayment: monthlyPayment * months,
      totalInterest,
      schedule,
    };
  }, [creditAmount, annualRate, duration, scheduleType]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  return (
    <div className="w-full max-w-[100rem] mx-auto px-6 md:px-12 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h2 className="font-heading text-5xl md:text-6xl text-primary mb-6">
            Loan Calculator
          </h2>
          <p className="font-paragraph text-xl text-foreground/70 max-w-3xl mx-auto">
            Calculate your estimated monthly payment and view detailed repayment schedules
          </p>
        </div>

        <div className="grid grid-cols-12 gap-12">
          {/* Input Section */}
          <motion.div
            className="col-span-12 lg:col-span-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 bg-white border border-primary/10">
              <div className="space-y-8">
                {/* Credit Amount */}
                <div>
                  <label className="font-paragraph text-lg text-primary font-semibold mb-4 block">
                    Credit Amount: {formatCurrency(creditAmount)}
                  </label>
                  <input
                    type="range"
                    min="10000"
                    max="1000000"
                    step="10000"
                    value={creditAmount}
                    onChange={(e) => setCreditAmount(Number(e.target.value))}
                    className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between font-paragraph text-sm text-foreground/60 mt-2">
                    <span>€10,000</span>
                    <span>€1,000,000</span>
                  </div>
                  <input
                    type="number"
                    min="10000"
                    max="1000000"
                    step="10000"
                    value={creditAmount}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      if (val >= 10000 && val <= 1000000) {
                        setCreditAmount(val);
                      }
                    }}
                    className="w-full mt-3 px-3 py-2 border border-primary/20 rounded-lg font-paragraph text-sm focus:outline-none focus:border-primary"
                  />
                </div>

                {/* Annual Rate */}
                <div>
                  <label className="font-paragraph text-lg text-primary font-semibold mb-4 block">
                    Annual Rate: {annualRate.toFixed(2)}%
                  </label>
                  <input
                    type="range"
                    min="9"
                    max="15"
                    step="0.1"
                    value={annualRate}
                    onChange={(e) => setAnnualRate(Number(e.target.value))}
                    className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between font-paragraph text-sm text-foreground/60 mt-2">
                    <span>9%</span>
                    <span>15%</span>
                  </div>
                  <input
                    type="number"
                    min="9"
                    max="15"
                    step="0.1"
                    value={annualRate}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      if (val >= 9 && val <= 15) {
                        setAnnualRate(val);
                      }
                    }}
                    className="w-full mt-3 px-3 py-2 border border-primary/20 rounded-lg font-paragraph text-sm focus:outline-none focus:border-primary"
                  />
                </div>

                {/* Duration */}
                <div>
                  <label className="font-paragraph text-lg text-primary font-semibold mb-4 block">
                    Duration: {duration} months ({(duration / 12).toFixed(1)} years)
                  </label>
                  <input
                    type="range"
                    min="3"
                    max="240"
                    step="1"
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                    className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between font-paragraph text-sm text-foreground/60 mt-2">
                    <span>3 months</span>
                    <span>240 months</span>
                  </div>
                  <input
                    type="number"
                    min="3"
                    max="240"
                    step="1"
                    value={duration}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      if (val >= 3 && val <= 240) {
                        setDuration(val);
                      }
                    }}
                    className="w-full mt-3 px-3 py-2 border border-primary/20 rounded-lg font-paragraph text-sm focus:outline-none focus:border-primary"
                  />
                </div>

                {/* Schedule Type */}
                <div>
                  <label className="font-paragraph text-lg text-primary font-semibold mb-4 block">
                    Payment Schedule
                  </label>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setScheduleType('annuity')}
                      className={`flex-1 py-3 px-4 rounded-lg font-paragraph font-semibold transition-all duration-300 ${
                        scheduleType === 'annuity'
                          ? 'bg-primary text-white'
                          : 'bg-primary/10 text-primary hover:bg-primary/20'
                      }`}
                    >
                      Annuity
                    </button>
                    <button
                      onClick={() => setScheduleType('bullet')}
                      className={`flex-1 py-3 px-4 rounded-lg font-paragraph font-semibold transition-all duration-300 ${
                        scheduleType === 'bullet'
                          ? 'bg-primary text-white'
                          : 'bg-primary/10 text-primary hover:bg-primary/20'
                      }`}
                    >
                      Bullet
                    </button>
                  </div>
                  <p className="font-paragraph text-sm text-foreground/60 mt-3">
                    {scheduleType === 'annuity'
                      ? 'Equal monthly payments throughout the loan term'
                      : 'Interest-only payments monthly, principal due at end'}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Results Section */}
          <motion.div
            className="col-span-12 lg:col-span-7"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 bg-primary text-white border-0">
                  <p className="font-paragraph text-sm text-white/70 mb-2">
                    Monthly Payment
                  </p>
                  <p className="font-heading text-3xl">
                    {formatCurrency(calculations.monthlyPayment)}
                  </p>
                </Card>

                <Card className="p-6 bg-accent-gold text-primary border-0">
                  <p className="font-paragraph text-sm text-primary/70 mb-2">
                    Total Interest
                  </p>
                  <p className="font-heading text-3xl">
                    {formatCurrency(calculations.totalInterest)}
                  </p>
                </Card>

                <Card className="p-6 bg-primary/10 border border-primary/20">
                  <p className="font-paragraph text-sm text-foreground/70 mb-2">
                    Total Payment
                  </p>
                  <p className="font-heading text-3xl text-primary">
                    {formatCurrency(calculations.totalPayment)}
                  </p>
                </Card>

                <Card className="p-6 bg-primary/5 border border-primary/10">
                  <p className="font-paragraph text-sm text-foreground/70 mb-2">
                    Credit Amount
                  </p>
                  <p className="font-heading text-3xl text-primary">
                    {formatCurrency(creditAmount)}
                  </p>
                </Card>
              </div>

              {/* Schedule Preview */}
              <Card className="p-6 bg-white border border-primary/10">
                <h3 className="font-heading text-2xl text-primary mb-4">
                  Payment Schedule Preview
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-primary/10">
                        <th className="text-left py-3 px-2 font-paragraph font-semibold text-foreground/70">
                          Month
                        </th>
                        <th className="text-right py-3 px-2 font-paragraph font-semibold text-foreground/70">
                          Payment
                        </th>
                        <th className="text-right py-3 px-2 font-paragraph font-semibold text-foreground/70">
                          Principal
                        </th>
                        <th className="text-right py-3 px-2 font-paragraph font-semibold text-foreground/70">
                          Interest
                        </th>
                        <th className="text-right py-3 px-2 font-paragraph font-semibold text-foreground/70">
                          Balance
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {calculations.schedule.slice(0, 12).map((item) => (
                        <tr
                          key={item.month}
                          className="border-b border-primary/5 hover:bg-primary/5 transition-colors"
                        >
                          <td className="py-3 px-2 font-paragraph text-foreground">
                            {item.month}
                          </td>
                          <td className="text-right py-3 px-2 font-paragraph text-foreground font-semibold">
                            {formatCurrency(item.payment)}
                          </td>
                          <td className="text-right py-3 px-2 font-paragraph text-foreground">
                            {formatCurrency(item.principal)}
                          </td>
                          <td className="text-right py-3 px-2 font-paragraph text-foreground">
                            {formatCurrency(item.interest)}
                          </td>
                          <td className="text-right py-3 px-2 font-paragraph text-foreground font-semibold">
                            {formatCurrency(item.balance)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="font-paragraph text-xs text-foreground/50 mt-4">
                  Showing first 12 months of {duration} month schedule
                </p>
              </Card>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
