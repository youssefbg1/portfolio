import React from 'react';
import TimelineItem from './TimelineItem';
import { activities } from '../../data/activities';

export default function Timeline() {
  // Sort activities newest first based on date string
  const sortedActivities = [...activities].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <section id="experience" style={{ padding: '8rem 0', borderTop: '2px solid var(--blue2)' }}>
      
      {/* Header */}
      <div className="grid-container" style={{ marginBottom: '4rem' }}>
        <div className="col-span-12">
          <h2 className="text-heading" style={{ margin: 0, paddingBottom: '1.5rem', borderBottom: '2px solid var(--blue5)' }}>
            <span className="text-accent" style={{ marginRight: '1rem' }}>04 /</span> 
            ACTIVITIES & EXPERIENCE
          </h2>
        </div>
      </div>

      {/* Timeline List */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {sortedActivities.map(activity => (
          <TimelineItem key={activity.id} activity={activity} />
        ))}
      </div>

    </section>
  );
}
