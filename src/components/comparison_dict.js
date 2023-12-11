
const title_do_id_dict = {
    "Uncle Tom's Cabin": 'UTC',
    "The Adventures of Huckleberry Finn": 'AHF',
    "Lincoln's First Inaugural Address": 'LFI',
    "This Republic of Suffering": 'TRS',
}

export const id_dict_to_title = {
    'UTC': "Uncle Tom's Cabin",
    'AHF': "The Adventures of Huckleberry Finn",
    'LFI': "Lincoln's First Inaugural Address",
    'TRS': "This Republic of Suffering",
}


const AHF_AHF = "A fascinating theme in the Novel is Huck’s relationship with Christianity, society, \
and morality. As the book progresses, Huck is placed in a number of situations in which he must weigh \
societal norms and christian doctrine against his own morality. This is most clear when Huck has to decide \
whether to turn Jim in. He knows by the rules of society he “should”, but in the end follows his own moral \
code and chooses not to, concluding that if he is sent to hell for such actions then sobeit."

const LFI_LFI = 'Lincoln’s first inaugural address was widely criticized by abolitionists as being \
unacceptably tolerant and supportive of slavery. In a scathing rebuke of Lincoln’s speech, Frederick \
Douglass wrote, “Mr. Lincoln opens his address by announcing his complete loyalty to slavery in the \
slave states”. Whilst Lincoln eventually enacts the emancipation proclamation, he was by no means \
a staunch abolitionist, especially at the beginning of his tenure. At this time it is clear that\
Lincoln’s primary concern is that of the Union, and not the end of slavery.'

const UTC_UTC = 'Uncle Tom’s Cabin sits as a centerpiece of antebellum anti-slavery literature. Stowe \
presents a harrowing account of slavery, most notably through the truly evil character of Legree. The \
novel was influential in galvanizing anti-slavery sentiment in the Northern states. Its publication is \
often cited as a contributing factor to the start of the American Civil War—In a meeting between Abraham \
Lincoln and Stowe in 1862, Lincoln apocryphally said she was the  “woman who wrote the book that started \
this great war”. \
The novel does however contain troubling themes that are seen throughout anti-slavery advocates in the antebellum era. \
In particular, at the end of the book Stowe advocates for abolition, but sending freed slaves to Liberia. \
This colonization viewpoint was heavily critiqued by leading abolitionists of the time, such as \
Frederick Douglass.'

const TRS_TRS = 'The Civil War marked a clear departure from the idea of a “good” and “noble” death at war. \
It was one of the first “living room” wars—photographs were taken after battles documenting the horrific \
aftermaths, and engravings of these images were circulated in newspapers. Beyond the visual depictions of \
war, the sheer amount of deaths meant that almost all families and communities were affected.'

const AHF_LFI = 'These two pieces give us an interesting lens into how southern society was viewed over time. \
Lincoln’s first inaugural address was aimed solely at preserving the Union and avoiding Civil War. \
He praises and reassures southern society, implicitly placing a great value on its continued inclusion \
in the Union. In contrast to this, Twain takes a deeply satirical approach, providing a critique of southern \
society (and American society in general). This is exemplified through Twain’s main character, Huck, a young \
boy who is forced to fend for himself because society cannot protect him from his abusive father.'

const AHF_TRS = '"The Adventures of Huckleberry Finn" and "This Republic of Suffering" are deeply different works \
in many ways. They do however offer complimentary insights into the relationship of American society with Christianity \
in the Civil War era. Twain’s main character, Huck, experiences a struggle between Christian doctrine and his \
own personal morality. In the end, he chooses his own moral’s, damning himself to go to hell in the process. This \
anti-christian sentiment was one of the contributing factors that led to the book being banned in Corcord, \
Massachusetts, after its publication. Similarly, in “This Republic of Suffering”, Faust explores how American society \
reckoned with faith in the midst of the mass death and suffering of the Civil War.'

const AHF_UTC = 'Both “Uncle Tom’s Cabin” and “The Adventures of Huckleberry Finn” are considered American classics. \
Despite this, their content reflects the  very different times in which they were written. Stowe’s work has a clear anti-slavery tone, written pre \
Civil War and calling on the reader to act out against slavery. The final chapter of the book presents two possible \
futures for America. The first is abolition of slavery (notably Stowe calls for such abolition through the colonization \
of Liberia). The second is apocalypse, or at least the end of the Union. “The Adventures of Huckleberry Finn”, although \
set during a similar time period as “Uncle Tom’s Cabin”, was written far later after the abolition of slavery. Accordingly \
it takes a less prescriptive tone. Twain’s less sentimental writing does not force conclusions upon the reader \
like Stowe, and in general does not present slavery in as shocking a manner. Something that brings both books together \
is their mixed receptions—both went through periods of being banned in various locations, and have moved in and out \
of popular favor as time passes.'

const LFI_TRS = 'Lincoln’s first inaugural address, that focused on preserving the Union and averting civil war, was \
criticized by anti-slavery and abolitionist groups for its concession to Southern interests. However, this address must \
be understood in the broader context of Lincoln’s evolving stance on slavery. "This Republic of Suffering" sheds light\
on the horrific toll of the Civil War, contextualizing the harm to the nation that Lincoln feared during his \
first address. By the time of his second inaugural address, Lincoln acknowledged the devastating yet necessary and \
righteous nature of the war, emphasizing that its true significance lay in bringing an end to slavery.'

const LFI_UTC = '“Uncle Tom’s Cabin” presents the fractures in American society over slavery that lead directly to \
Lincoln’s election. Stowe, a northerner, presents a clearly anti-slavery viewpoint in her book. What’s more, at the \
end of the book she calls directly on the reader to aid in the abolition of slavery.  After its release, the book \
galvanized the abolitionist movement in the north, and was reviled in the South, being widely banned. When Lincoln \
took to the steps of the US capitol for his first inaugural address, these fractures had manifested as succession. \
Whilst Lincoln tries to reassure the south in this address, war is inevitable.'

const TRS_UTC = 'At the end of Uncle Tom’s Cabin, Harriet Beecher Stowe states that if slavery is not abolished \
the US will face an apocalypse akin to that seen in the book of revelation. In “This Republic of Suffering”, \
Faust illustrates the magnitude of death and suffering during the Civil Wart. It is estimated that over \
600,000 Americans died during the war, roughly 2% of the population of the US at the time. \
This percentage of the current US population amounts to roughly six million people. Put in these terms, \
we see that in many ways Stowe’s apocalyptic prediction did indeed come to pass.'

export const comparison_dict = {
    "AHF_AHF": AHF_AHF,
    "AHF_LFI": AHF_LFI,
    "AHF_TRS": AHF_TRS,
    "AHF_UTC": AHF_UTC,
    "LFI_LFI": LFI_LFI,
    "LFI_TRS": LFI_TRS,
    "LFI_UTC": LFI_UTC,
    "TRS_TRS": TRS_TRS,
    "TRS_UTC": TRS_UTC,
    "UTC_UTC": UTC_UTC,
  };