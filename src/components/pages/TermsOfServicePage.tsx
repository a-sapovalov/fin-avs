import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow w-full">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 py-20">
          <h1 className="font-heading text-6xl text-dark-brown mb-12">Terms of Service</h1>
          
          <div className="font-paragraph text-base text-dark-brown leading-relaxed space-y-8">
            <section>
              <h2 className="font-heading text-2xl text-dark-brown mb-4">1. Introduction</h2>
              <p>
                These Terms of Service ("Terms") govern your use of the AVS Finance website and services. By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-dark-brown mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on AVS Finance's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Modifying or copying the materials</li>
                <li>Using the materials for any commercial purpose or for any public display</li>
                <li>Attempting to decompile or reverse engineer any software contained on the website</li>
                <li>Removing any copyright or other proprietary notations from the materials</li>
                <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-dark-brown mb-4">3. Disclaimer</h2>
              <p>
                The materials on AVS Finance's website are provided on an 'as is' basis. AVS Finance makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-dark-brown mb-4">4. Limitations</h2>
              <p>
                In no event shall AVS Finance or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on AVS Finance's website, even if AVS Finance or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-dark-brown mb-4">5. Accuracy of Materials</h2>
              <p>
                The materials appearing on AVS Finance's website could include technical, typographical, or photographic errors. AVS Finance does not warrant that any of the materials on its website are accurate, complete, or current. AVS Finance may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-dark-brown mb-4">6. Links</h2>
              <p>
                AVS Finance has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by AVS Finance of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-dark-brown mb-4">7. Modifications</h2>
              <p>
                AVS Finance may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-dark-brown mb-4">8. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of Estonia, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-dark-brown mb-4">9. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 space-y-2">
                <p><strong>Email:</strong> info@avs.ee</p>
                <p><strong>Phone:</strong> +372 5306 6545</p>
                <p><strong>Address:</strong> Kentmanni tn 6, 10116 Tallinn, Estonia</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
