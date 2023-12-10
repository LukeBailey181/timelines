import React, { useState } from 'react';
import Timeline from './components/timeline';
import EventModal from './components/event_modal';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './App.css';

const App = () => {

  return (
    //<div className="App">
    <VerticalTimeline
    animate={true}
    lineColor="black"  
    >
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    //contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    //contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="1831"
    //iconStyle={{ background: 'black', color: '#fff' }}
    iconStyle={{ background: 'black', color: '#fff' }}
    //icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">The Confessions of Nat Turner</h3>
    <h4>Summary</h4>
    <p>
    Nat Turner was an enslaved African-American preacher who believed he received visions from God, 
    guiding him towards an insurrection. In August 1831, Turner led a group of enslaved and free black 
    people in a rebellion. They went from plantation to plantation, liberating slaves and 
    killing white inhabitants, aiming to strike fear in the heart of the institution of slavery.
    The rebellion was eventually suppressed, and Turner went into hiding but was captured two months later. 
    In the wake of the revolt, there was widespread fear and violent reprisals against the black population.
    <br></br>
    <br></br>
    Turner was interviewed by Thomas R. Gray while in jail awaiting trial. Gray published "The Confessions of Nat Turner," 
    presenting it as Turner's own account of his life and the reasons behind the rebellion.
    </p>
    <h4>Analysis</h4>
    <p> 
    There is much debate over how authentic the confessions of Nat Turner are and how much was doctored by Gray.
     What is clear however is the consequence of Turner’s action. On the one hand, it led to severe reprisals for 
     enslaved people. Southern states prohibited masters from teaching slaves to read and write, and many black
     preachers were removed and replaced with whites. In contrast to this, it led to a swell of abolitionist thinking 
     in the North by providing evidence that southern rhetoric about slavery as a pastoral institution was false. 
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="1852"
    iconStyle={{ background: 'black', color: '#fff' }}
    //icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Uncle Tom’s Cabin</h3>
    <h4 className="vertical-timeline-element-subtitle">Harriet Beecher Stowe</h4>
    <h4>Summary</h4>
    <p>
    Uncle Tom's Cabin" is a novel written by Harriet Beecher Stowe. The book is set in the antebellum US.
    It tells the story of Uncle Tom, an enslaved African American man, and the various characters he encounters.
     Uncle Tom is sold and moved between various plantations in, ending with that of Simon Legree. Legree’s 
     treatment of Tom is horrific, ending in Tom's eventual death. 
    </p>
    <h4>Analysis</h4>
    <p>
    Uncle Tom’s Cabin sits as a centerpiece of antebellum anti-slavery literature. Stowe presents a harrowing account of slavery, 
    most notably through the truly evil character of Legree. The novel was influential in galvanizing anti-slavery sentiment 
    in the Northern states. Its publication is often cited as a contributing factor to the start of the American 
    Civil War—In a meeting between Abraham Lincoln and Stowe in 1862, Lincoln apocryphally said she was the 
    “woman who wrote the book that started this great war”.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="1855"
    iconStyle={{ background: 'black', color: '#fff' }}
    //icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Benito Cereno</h3>
    <h4 className="vertical-timeline-element-subtitle">Herman Melville</h4>
    <h4>Summary</h4>
    <p>
    Herman Melville's "Benito Cereno" is a novella first published in 1855. 
    The story is set on a Spanish slave ship, the San Dominick, which is encountered by an American whaling ship, 
    the Bachelor's Delight, off the coast of Chile. The American captain, Amasa Delano, boards the ship to offer assistance, 
    as the San Dominick appears to be in distress. Delano meets the Spanish captain, Benito Cereno, and a group of slaves. Cereno acts 
    as though nothing is wrong, however it is later revealed that the slaves, lead by a man named Babo, have revolted and are secretly 
    in charge of the vessel. A battle ensues, and the slaves are subdued.
    </p>
    <h4>Analysis</h4>
    <p>
    “Benito Cereno” is a particularly unsettling work to read. Throughout the novella, it is clear that something is wrong,
    that Cereno is hiding something, and that Delano is missing it. When it is eventually revealed that the slaves have been in control 
    the entire time, the reader is left in a similar state of shock to the Delano. Babo’s character is of considerable note—whilst outwardly 
    he presents as a loyal servant to Cereno, he is in fact the most intelligent character of the book.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="1861"
    iconStyle={{ background: 'black', color: '#fff' }}
    //icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">First Inaugural Address</h3>
    <h4 className="vertical-timeline-element-subtitle">Abraham Lincoln</h4>
    <h4>Summary</h4>
    <p>
    Abraham Lincoln was inaugurated on March 4th 1861. After winning the election in 1860, South Carolina succeeded, 
    followed by 6 other states before Lincoln’s inauguration: Mississippi, Florida, Alabama, Georgia, Louisiana, and Texas.
     In April 1861, the first bloodshed of the Civil War would be committed by southerners at the attack on Fort Sumter. 
     In Lincoln’s first address, taking place this attack, focuses on reconciliation with the South, assuring southerners 
     that he did not intend to end slavery.  
    </p>
    <h4>Analysis</h4>
    <p>
    Lincoln’s first inaugural address was widely criticized by abolitionists as being unacceptably tolerant and supportive of slavery. 
    In a scathing rebuke of Lincoln’s speech, Frederick Douglass wrote, “Mr. Lincoln opens his address by announcing his complete 
    loyalty to slavery in the slave states”. Whilst Lincoln eventually enacts the emancipation proclamation, he was by no means a staunch 
    abolitionist, especially at the beginning of his tenure. At this time it is clear that Lincoln’s primary concern is that of the Union, 
    and not the end of slavery.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="1863"
    iconStyle={{ background: 'black', color: '#fff' }}
    //icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Emancipation Proclamation</h3>
    <h4 className="vertical-timeline-element-subtitle">Abraham Lincoln</h4>
    <h4>Summary</h4>
    <p>
    “On the first day of January, in the year of our Lord one thousand eight hundred and sixty-three, 
    all persons held as slaves within any State or designated part of a State, the people whereof shall then
     be in rebellion against the United States, shall be then, thenceforward, and forever free”. 
    </p>
    <h4>Analysis</h4>
    <p>
    The emancipation proclamation served as a critical step towards the freedom of enslaved people, but notably well short of 
    this goal in many ways. Most significantly, it only applied to states that had succeeded from the union (meaning loyal border 
    slave states were unaffected), and exempted parts of the confederacy that were already under union control. It did however 
    contribute to a clear redefinement of the war from being about the preservation of the union to the ending of slavery. 
    Lincoln would make these thoughts explicitly clear in his second inaugural  address on March 4, 1865, stating “all knew that
     this interest [slavery] was somehow the cause of the war.”
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="1864"
    iconStyle={{ background: 'black', color: '#fff' }}
    //icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Letter of Port Royal Freedmen to President Lincoln</h3>
    <h4>Summary</h4>
    <p>
    The letter from the Port Royal Freedmen to President Lincoln, dated March 1, 1864, voiced the concerns of 19 
    freedmen over unfair treatment by Edward Philbrick, who bought their former masters' lands under false promises.
     Philbrick had initially agreed to sell the lands back to the freedmen at $1 per acre but later refused and demanded 
     $10 per acre. The freedmen also report an incident of abuse by Philbrick's agent, which went unaddressed. 
      <br></br>
      <br></br>
      They requested Lincoln to either compel Philbrick to honor his initial promise, have the government repurchase the
      land and allow them to farm it, or appoint a just agent to oversee their treatment. They seek an urgent response to
       guide their next steps, expressing deep respect for Lincoln.
    </p>
    <h4>Analysis</h4>
    <p>
    The letter gives an insight into the troubles that would be felt by former enslaved people the country over after the
    emancipation proclamation. Despite the freed status of those writing the letter, we see that they are really free in
     name only—they are cheated, forced to work, and still mistreated. This story would be repeated across the country
      in the years to come, most notably through sharecropping.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="1884"
    iconStyle={{ background: 'black', color: '#fff' }}
    //icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">The Adventures of Huckleberry Finn</h3>
    <h4 className="vertical-timeline-element-subtitle">Mark Twain</h4>
    <h4>Summary</h4>
    <p>
      Creative Direction, Visual Design
    </p>
    <h4>Analysis</h4>
    <p>

    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'black', color: '#fff' }}
    //icon={<StarIcon />}
  />
</VerticalTimeline>
   // </div>
  );
};

export default App;
