import { useState } from 'react'

const tabs = [
  {
    id: '10years',
    label: '10+ Years Of Experience',
    content: `With over a decade of experience in the digital industry, Has Remote Solution Pvt. Ltd. has established itself as a leading provider of innovative and effective digital solutions. We understand the importance of staying updated with the latest trends and technologies in the digital landscape.That is why we constantly strive to stay up-to-date with the latest developments and advancements in our industry. Our team is well-versed in a wide range of digital technologies and tools, including web development, mobile app development, e-commerce solutions, digital marketing, and more.

We take a customer-centric approach to our work, ensuring that each solution we develop is customized to meet the unique needs and objectives of our clients. We have established a solid reputation as a dependable and trustworthy partner for companies of all sizes because of our emphasis on quality and client satisfaction. To find out more about how we can support you in achieving your digital goals, get in touch with us right away.`,
  },
  {
    id: 'track',
    label: 'Proven Track Record',
    content: `At Has Remote Solution Pvt. Ltd., we take pride in our proven track record of delivering successful digital solutions to businesses across a wide range of industries. We have worked with businesses of all sizes, from startups to established enterprises, and have helped them achieve their digital goals.Our clients trust us to deliver solutions that are tailored to their unique needs and objectives.

We think that the success of our clients is closely related to our success. That is why we work closely with them to understand their goals and objectives and develop solutions that deliver tangible results. Our proven track record is a testament to our commitment to delivering high-quality solutions that meet our client's needs and exceed their expectations.

Our clients trust us to deliver solutions that are tailored to their unique needs and objectives. We think that the success of our clients is closely related to our success. That's why we work closely with them to understand their goals and develop solutions that deliver tangible results.`,
  },
  {
    id: 'collaborative',
    label: 'Collaborative Approach',
    content: `At Has Remote Solution Pvt. Ltd., we take a collaborative approach to our work, working closely with our clients to ensure that their needs and requirements are met. We believe that the key to a successful project is open communication and collaboration.

We work hand-in-hand with our clients to understand their goals and objectives, keeping them informed throughout the project lifecycle. Our collaborative approach allows us to build strong relationships and develop solutions that meet unique needs.We believe that every project is a partnership between us and our clients, and we work hard to ensure that our clients are involved in the decision-making process every step of the way.

We take pride in our ability to listen to our client's feedback and incorporate their ideas into our solutions. Our collaborative approach has earned us a reputation as a trusted partner for businesses of all sizes. If you're looking for a digital partner that values open communication and collaboration, Has Remote Solution Pvt. Ltd. is the right choice for you.`,
  },
  {
    id: 'roi',
    label: 'Focus On ROI',
    content: `We understand that businesses invest in digital solutions to drive growth and generate revenue. That's why we focus on delivering solutions that provide a high return on investment (ROI) for our clients. Our experts take a data-driven approach to develop strategies aligned with your business goals.and objectives. We measure the success of our solutions based on their impact on our client's bottom line.

To create solutions specifically tailored to our clients' demands, we work closely with them to understand their business needs. Our focus on ROI means that we prioritize solutions that deliver the highest possible value.for our clients. We believe that a successful project delivers measurable results and drives business growth.

Partnering with Has Remote Solution Pvt. Ltd. means that you can expect solutions that not only meet your digital needs but also deliver a high ROI. We are dedicated to delivering solutions that provide real value to our clients, helping them achieve their business objectives and drive growth.`,
  },
  {
    id: 'transparency',
    label: 'Transparency',
    content: `We understand that trust is a critical component of any successful business relationship, and we work hard to build and maintain that trust with our clients. We provide regular updates and progress reports throughout the project lifecycle, ensuring clients are always aware of what is happening  with their digital solutions. Transparency, in our opinion, is essential to developing enduring connections with our clients..

We also believe in being upfront and honest about costs and timelines. We provide accurate estimates and ensure that there are no hidden fees or surprises. Our commitment to transparency is reflected in our open communication channels., easy-to-understand contracts, and our willingness to answer any questions or concerns that our clients may have. At Has Remote Solution Pvt. Ltd., we are dedicated to providing our clients with the highest level of transparency, ensuring that they feel confident in their partnership with us.`,
  },
  {
    id: 'expertise',
    label: 'Industry Expertise',
    content: `We pride ourselves on our industry expertise. Our team has a deep understanding of the digital landscape and the challenges that businesses face in today's fast-paced world. We keep abreast of the latest developments in digital trends and technology to give clients cutting-edge solutions that are suited to their requirements.

Our industry expertise allows us to develop effective strategies and solutions that deliver tangible results. We have worked with businesses across healthcare, finance, retail, and many other industries, leveraging knowledge to provide customized solutions.`,
  },
]

export default function WhyChooseUs() {
  const [active, setActive] = useState(tabs[0].id)
  const activeTab = tabs.find((t) => t.id === active)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">Why Us</p>
          <h2 className="section-title">Why Choose Has Remote Solution?</h2>
          <p className="section-subtitle">
            Experience the Power of Results-Driven Digital Marketing with hasremotesolution
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Tabs */}
          <div className="lg:col-span-2 space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active === tab.id
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-primary/5 hover:text-primary border border-gray-100'
                }`}
              >
                {active === tab.id && <span className="text-accent mr-2">▶</span>}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="lg:col-span-3 bg-white rounded-xl p-8 shadow-lg border-l-4 border-accent">
            <h3 className="text-xl font-bold text-primary mb-4">{activeTab.label}</h3>
            <div className="w-12 h-1 bg-accent rounded mb-5" />
            {activeTab.content.split('\n\n').map((para, i) => (
              <p key={i} className="text-gray-600 text-sm leading-relaxed mb-4 last:mb-0">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
