import React from 'react'
import FeatureCard from './FeatureCard'

const featuresData = [
  {
    icon: '📋',
    title: 'Task Manager',
    description: 'Add your daily tasks, set deadlines, and mark them done one by one.'
  },
  {
    icon: '📈',
    title: 'Progress Tracker',
    description: 'See how many tasks you completed this week and keep your streak alive.'
  },
  {
    icon: '📁',
    title: 'Note Sharing',
    description: 'Save your notes and share resources with your classmates easily.',
    link: '/notes'
  }
]

function Features() {
  return (
    <section id="features">
      <h2>Everything you need to study better</h2>
      <p className="features-sub">
        Three simple tools that keep you organised
      </p>
      <div className="features-grid">
        {featuresData.map((item, index) => (
          <FeatureCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            link={item.link}
          />
        ))}
      </div>
    </section>
  )
}

export default Features