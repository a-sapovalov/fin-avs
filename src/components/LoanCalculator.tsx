import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

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
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);

  const calculations = useMemo(() => {
    const principal = creditAmount;
    const originationFee = creditAmount * 0.01; // 1% origination fee
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

    let totalPayment = monthlyPayment * months;
    if (scheduleType === 'bullet') {
      totalPayment = totalInterest + principal;
    }

    return {
      monthlyPayment,
      totalPayment,
      totalInterest,
      originationFee,
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      <Card className="p-6 md:p-8 bg-white border border-dark-brown/10">
        <div className="space-y-6">
          {/* Credit Amount */}
          <div>
            <label className="font-paragraph text-sm md:text-base text-dark-brown font-semibold mb-3 block">
              credit amount: {formatCurrency(creditAmount)}
            </label>
            <input
              type="range"
              max="1000000"
              step="10000"
              value={creditAmount}
              onChange={(e) => setCreditAmount(Number(e.target.value))}
              className="w-full h-2 bg-dark-brown/20 rounded-lg appearance-none cursor-pointer accent-dark-brown"
            />
            <div className="flex justify-between font-paragraph text-xs text-dark-brown-light mt-2">
              <span>€0</span>
              <span>€1,000,000</span>
            </div>
          </div>

          {/* Annual Rate */}
          <div>
            <label className="font-paragraph text-sm md:text-base text-dark-brown font-semibold mb-3 block">
              annual rate: {annualRate.toFixed(2)}%
            </label>
            <input
              type="range"
              max="15"
              step="0.1"
              value={annualRate}
              onChange={(e) => setAnnualRate(Number(e.target.value))}
              className="w-full h-2 bg-dark-brown/20 rounded-lg appearance-none cursor-pointer accent-dark-brown"
            />
            <div className="flex justify-between font-paragraph text-xs text-dark-brown-light mt-2">
              <span>0%</span>
              <span>15%</span>
            </div>
          </div>

          {/* Duration */}
          <div>
            <label className="font-paragraph text-sm md:text-base text-dark-brown font-semibold mb-3 block">
              duration: {duration} months ({(duration / 12).toFixed(1)} years)
            </label>
            <input
              type="range"
              max="240"
              step="1"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="w-full h-2 bg-dark-brown/20 rounded-lg appearance-none cursor-pointer accent-dark-brown"
            />
            <div className="flex justify-between font-paragraph text-xs text-dark-brown-light mt-2">
              <span>0 months</span>
              <span>240 months</span>
            </div>
          </div>

          {/* Schedule Type */}
          <div>
            <label className="font-paragraph text-sm md:text-base text-dark-brown font-semibold mb-3 block">repayment schedule type</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="schedule"
                  value="annuity"
                  checked={scheduleType === 'annuity'}
                  onChange={(e) => setScheduleType(e.target.value as 'annuity' | 'bullet')}
                  className="w-4 h-4 accent-dark-brown"
                />
                <span className="font-paragraph text-sm text-dark-brown">annuity (equal payments)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="schedule"
                  value="bullet"
                  checked={scheduleType === 'bullet'}
                  onChange={(e) => setScheduleType(e.target.value as 'annuity' | 'bullet')}
                  className="w-4 h-4 accent-dark-brown"
                />
                <span className="font-paragraph text-sm text-dark-brown">bullet (interest only)</span>
              </label>
            </div>
          </div>

          {/* Credit Amount Display */}
          <div className="pt-4 border-t border-dark-brown/10">
            <p className="font-paragraph text-xs text-dark-brown-light mb-2">
              credit amount
            </p>
            <p className="font-heading text-2xl md:text-3xl text-dark-brown mb-4">
              {formatCurrency(creditAmount)}
            </p>
            <Button
              onClick={() => setIsScheduleOpen(true)}
              className="w-full bg-dark-brown hover:bg-dark-brown-light text-white font-paragraph font-semibold py-2 rounded-lg transition-colors"
            >
              view payment schedule
            </Button>
          </div>

          {/* Key Results */}
          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-dark-brown/10">
            <div>
              <p className="font-paragraph text-xs text-dark-brown-light mb-1">
                monthly payment
              </p>
              <p className="font-heading text-xl md:text-2xl text-dark-brown">
                {formatCurrency(calculations.monthlyPayment)}
              </p>
            </div>

            <div>
              <p className="font-paragraph text-xs text-dark-brown-light mb-1">
                total interest
              </p>
              <p className="font-heading text-xl md:text-2xl text-dark-brown">
                {formatCurrency(calculations.totalInterest)}
              </p>
            </div>

            <div>
              <p className="font-paragraph text-xs text-dark-brown-light mb-1">
                origination fee (1%)
              </p>
              <p className="font-heading text-xl md:text-2xl text-dark-brown">
                {formatCurrency(calculations.originationFee)}
              </p>
            </div>

            <div>
              <p className="font-paragraph text-xs text-dark-brown-light mb-1">
                total payment
              </p>
              <p className="font-heading text-xl md:text-2xl text-dark-brown">
                {formatCurrency(calculations.totalPayment + calculations.originationFee)}
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Payment Schedule Dialog */}
      <Dialog open={isScheduleOpen} onOpenChange={setIsScheduleOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-white border border-dark-brown/10">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl text-dark-brown">
              payment schedule preview
            </DialogTitle>
          </DialogHeader>

          <div className="mt-6">
            {/* Schedule Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-dark-brown/20">
                    <th className="text-left py-3 px-4 font-heading text-dark-brown">Month</th>
                    <th className="text-right py-3 px-4 font-heading text-dark-brown">Loan Balance</th>
                    <th className="text-right py-3 px-4 font-heading text-dark-brown">Principal Repayment</th>
                    <th className="text-right py-3 px-4 font-heading text-dark-brown">Interest Payment</th>
                    <th className="text-right py-3 px-4 font-heading text-dark-brown">Origination Fee Monthly</th>
                  </tr>
                </thead>
                <tbody>
                  {calculations.schedule.map((item, index) => {
                    const originationFeeMonthly = calculations.originationFee / duration;
                    return (
                      <tr
                        key={index}
                        className={`border-b border-dark-brown/10 ${
                          index % 2 === 0 ? 'bg-white' : 'bg-vibrant-yellow-light'
                        }`}
                      >
                        <td className="py-3 px-4 font-paragraph text-dark-brown">
                          {item.month}
                        </td>
                        <td className="text-right py-3 px-4 font-paragraph text-dark-brown">
                          {formatCurrency(item.balance)}
                        </td>
                        <td className="text-right py-3 px-4 font-paragraph text-dark-brown">
                          {formatCurrency(item.principal)}
                        </td>
                        <td className="text-right py-3 px-4 font-paragraph text-dark-brown">
                          {formatCurrency(item.interest)}
                        </td>
                        <td className="text-right py-3 px-4 font-paragraph text-dark-brown">
                          {formatCurrency(originationFeeMonthly)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Summary */}
            <div className="mt-6 pt-6 border-t border-dark-brown/20 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="font-paragraph text-xs text-dark-brown-light mb-1">
                  total principal
                </p>
                <p className="font-heading text-lg text-dark-brown">
                  {formatCurrency(creditAmount)}
                </p>
              </div>
              <div>
                <p className="font-paragraph text-xs text-dark-brown-light mb-1">
                  total interest
                </p>
                <p className="font-heading text-lg text-dark-brown">
                  {formatCurrency(calculations.totalInterest)}
                </p>
              </div>
              <div>
                <p className="font-paragraph text-xs text-dark-brown-light mb-1">
                  total origination fee
                </p>
                <p className="font-heading text-lg text-dark-brown">
                  {formatCurrency(calculations.originationFee)}
                </p>
              </div>
              <div>
                <p className="font-paragraph text-xs text-dark-brown-light mb-1">
                  total amount due
                </p>
                <p className="font-heading text-lg text-dark-brown">
                  {formatCurrency(calculations.totalPayment + calculations.originationFee)}
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}
