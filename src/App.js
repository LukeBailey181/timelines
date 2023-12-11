import React, { useState } from 'react';
import EventModal from './components/event_modal';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './App.css';
import {id_dict_to_title, comparison_dict} from './components/comparison_dict.js';

const App = () => {

  // Default values to first Value in List
  const [selectedEvent1, setSelectedEvent1] = useState('UTC');
  const [selectedEvent2, setSelectedEvent2] = useState('UTC');
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleDropdownChange = (event, dropdown) => {
    if (dropdown === 'event1') {
      setSelectedEvent1(event.target.value);
    } else {
      setSelectedEvent2(event.target.value);
    }

    let sorted_events = [selectedEvent1, selectedEvent2].sort();
    let key = sorted_events[0] + "_" + sorted_events[1];

    let content = comparison_dict[key];
    setModalContent(content);
    setModalOpen(false);
  };

  const openModalWithContent = () => {

    // Get event 1
    // Get event 2
    // access content/ 
    // set modal content

    //let event1 = title_do_id_dict[selectedEvent1];
    //let event2 = title_do_id_dict[selectedEvent2];
    // sort two events into alphabetical order 
    let sorted_events = [selectedEvent1, selectedEvent2].sort();
    let key = sorted_events[0] + "_" + sorted_events[1];

    let content = comparison_dict[key];

    setModalContent(content);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent(null);
  };

  return (
  <div>

    <div className="top-bar">
      <h1 className="top-bar-title">The American Civil War Through Time</h1>

      <div className="dropdown-container">
        <select onChange={(e) => handleDropdownChange(e, 'event1')} value={selectedEvent1} className="styled-select">
              <option value="UTC">Uncle Tom's Cabin</option>
              <option value="AHF">The Adventures of Huckleberry Finn</option>
              <option value="LFI">Lincoln's First Inaugural Address</option>
              <option value="TRS">This Republic of Suffering</option>
        </select>

        <select onChange={(e) => handleDropdownChange(e, 'event2')} value={selectedEvent2} className="styled-select">
              <option value="UTC">Uncle Tom's Cabin</option>
              <option value="AHF">The Adventures of Huckleberry Finn</option>
              <option value="LFI">Lincoln's First Inaugural Address</option>
              <option value="TRS">This Republic of Suffering</option>
        </select>

        <button onClick={() => openModalWithContent()} className="learn-more-button">Compare</button>
      </div>
    </div>

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
        date="1860"
        iconStyle={{ background: '#B02507', color: '#fff' }}
      >
        <h2 className='vertical-timeline-element-title'>
          South Carolina Succeeds
        </h2>
        <p>
          South Carolina is the first state to succeed from the union on December 20, 1860
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
        date="1861"
        iconStyle={{ background: '#B02507', color: '#fff' }}
      >
        <h2 className='vertical-timeline-element-title'>
          The Start of the Civil War - Attack on Fort Sumter 
        </h2>
        <p>
          On April 12, 1861, confederate troops attack the Union controlled Fort Sumter in South Carolina. 
          This marks the official start of the Civil War.
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
        date="1865"
        iconStyle={{ background: '#B02507', color: '#fff' }}
      >
        <h2 className='vertical-timeline-element-title'>
          End of the Civil War - Lee Surrenders 
        </h2>
        <p>
          On April 9, 1865, General Robert E. Lee surrenders to General Ulysses S. Grant at Appomattox Court House in Virginia.
          Although the war was not formally declared over until August 20, 1866, the surrender of Lee
          is widely considered the functional end of the Civil War.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1865"
        iconStyle={{ background: '#B02507', color: '#fff' }}
      >
        <h2 className='vertical-timeline-element-title'>
          Assassination of Abraham Lincoln
        </h2>
        <p>
          On April 14, 1865, Abraham Lincoln is assassinated by John Wilkes Booth at Ford's Theatre in Washington, D.C.
          This was only 41 days after his second inaugural address.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1865"
        iconStyle={{ background: '#5908B9', color: '#fff' }}
      >
        <h2 className='vertical-timeline-element-title'>
          Beginning of Reconstruction
        </h2>
        <p>
          Reconstruction, the turbulent period of reintegration of the South and roughly 4 million newly
          freed slaves into the Union, begins after the Civil War. 
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1877"
        iconStyle={{ background: '#5908B9', color: '#fff' }}
      >
        <h2 className='vertical-timeline-element-title'>
          End of Reconstruction
        </h2>
        <p>
          Many scholars place the end of the reconstruction period at 1877, when the last federal troops
          were removed from the South.
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
        “The Adventures of Huckleberry Finn” is arguably Mark Twain's most impactful piece of work.
        It is set during the mid 19th century during slavery. Huckleberry Finn, who escapes his abusive father,
        embarks on a raft journey along with Jim, a runaway slave. Despite societal norms and his own initial prejudices,
        Huck forms a close bond with Jim, and together they face various challenges, meeting a host of unique characters
        along the way. The novel concludes with the freeing of Jim from slavery by his now deceased former owner,
        and Huck’s promise to escape the grips of society by heading west. 
        </p>
        <h4>Analysis</h4>
        <p>
        A fascinating theme in the Novel is Huck’s relationship with Christianity, society, and morality.
        As the book progresses, Huck is placed in a number of situations in which he must weigh societal
        norms and christian doctrine against his own morality. This is most clear when Huck has to decide
        whether to turn Jim in. He knows by the rules of society he “should”, but in the end follows his own
        moral code and chooses not to, concluding that if he is sent to hell for such actions then sobeit. 
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="1997"
        iconStyle={{ background: 'black', color: '#fff' }}
        //icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">Beloved</h3>
        <h4 className="vertical-timeline-element-subtitle">Toni Morrison</h4>
        <h4>Summary</h4>
        <p>
        Winner of the 1988 Pulitzer Prize for fiction, “Beloved” presents the story of a former enslaved woman Sethe,
        now living in Cincinnati. The story revolves around Sethe's life at 124 Bluestone Road, where she's tormented
        by the ghost of her dead baby child, and her traumatic past during slavery. One day a woman who calls hersel
        Beloved appears on the steps of the house, and Sethe begins to look after her. The character of “Beloved” 
        is strange and seemingly supernatural in nature. We later find out Sethe killed her baby to save her from
        being recaptured into slavery, and Beloved appears to be a reincarnation of the child. The book climaxes
        with Beloved draining the life energy from Sethe, before being exorcised from 124 by members of the local community. 
        </p>
        <h4>Analysis</h4>
        <p>
        One of the interesting features of Beloved is its non-chronological structure—the novel features frequent flashbacks
        and retellings of past events that are presented in a non chronological order. Whilst the events of the present move 
        forward in time as expected, the past is presented in a jumbled manner, leaving the reader confused and disoriented.
        This leads to fascinating effect in which the reader's experience matches that of the characters. Both spend much of
        the novel reckoning with and understanding how the past affects the events of the present.  
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2008"
        iconStyle={{ background: 'black', color: '#fff' }}
        //icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">This Republic of Suffering: Death and the American Civil War </h3>
        <h4 className="vertical-timeline-element-subtitle">Drew Faust</h4>
        <h4>Summary</h4>
        <p>
        It is estimated that approximately 600,000 people died during the American Civil War. “This Republic of Suffering”
        is a non-fiction book that explores the impact that death on this scale had on individuals, families, and
        the wider american society at large. One powerful theme through the book is that of religion, and how many
        reconciled their christian beliefs with the magnitude of slaughter that was witnessed during the war. 
        </p>
        <h4>Analysis</h4>
        <p>
        The Civil War marked a clear departure from the idea of a “good” and “noble” death at war. 
        It was one of the first “living room” wars—photographs were taken after battles documenting the horrific aftermaths,
        and engravings of these images were circulated in newspapers. Beyond the visual depictions of war, the sheer amount
        of deaths meant that almost all families and communities were affected. 
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2017"
        iconStyle={{ background: 'black', color: '#fff' }}
        //icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">Romancing Slavery</h3>
        <h4 className="vertical-timeline-element-subtitle">Toni Morrison</h4>
        <h4>Summary</h4>
        <p>
        “Romancing Slavery” is an essay written by Toni Morrison and first published in her book “The Origin of Other”. 
        Amongst other things, the essay explores ways in which slavery was justified in the late 1700s and 1800s. 
        It presents excerpts from medical publications that used incorrect scientific reasoning to, in Morrison’s words,
        present blacks as “not quite like cattle, yet not recognizably human”. She also presents how novel’s such as “Uncle Tom’s Cabin” 
        romanticized slavery—that is attempts to “render [slavery] acceptable, even preferable, by humanizing, even cherishing it. 
        </p>
        <h4>Analysis</h4>
        <p>
        Morrison’s exploration of how Slavery was justified is enlightening 
        for any student studying this time period. It is easy to view those who were 
        complicit in slavery as simply “evil”, but Morrison digs deeper and shows the ways 
        in which such evil can arise—as she states in the essay “no one is born a racist and 
        there is no fetal predisposition to sexism”.
        </p>
      </VerticalTimelineElement>

    </VerticalTimeline>
    <EventModal 
    event1={id_dict_to_title[selectedEvent1]}
    event2={id_dict_to_title[selectedEvent2]}
    connectionInfo={modalContent}
    isOpen={isModalOpen} 
    onClose={closeModal} 
     />
  </div>
  );
};


export default App;
