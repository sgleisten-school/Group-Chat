import { Scenario } from '../types';

export const SCENARIOS: Scenario[] = [
  {
    id: 'the-new-chat',
    number: 1,
    title: 'The New Chat',
    subtitle: 'Leaving someone out of a side plan',
    groupName: 'Weekend Crew',
    viewerRole: 'Jonah',
    viewerId: 'jonah',
    summary:
      'Elise creates a secret side chat without Priya to plan a birthday outing. Marcus tells Jonah: "Don\'t tell Priya, she\'ll be weird about it."',
    estimatedMinutes: 4,
    characters: [
      { id: 'elise', name: 'Elise', avatarColor: '#B5533F', initials: 'EL' },
      { id: 'marcus', name: 'Marcus', avatarColor: '#3B6E8C', initials: 'MA' },
      { id: 'jonah', name: 'Jonah', avatarColor: '#2E7D6B', initials: 'JO', isViewer: true },
      { id: 'priya', name: 'Priya', avatarColor: '#E8B04A', initials: 'PR' },
    ],
    noticePrompt: {
      heading: 'Notice first: Stepping into the chat',
      body: 'Imagine you are sitting with friends at lunch. Marcus slides his phone over with a private chat you’re in, but Priya isn’t.',
      reflectionPrompt: 'Take a calm breath. Where might you feel that hesitation in your body?',
    },
    initialMessages: [
      { id: 'm1', senderId: 'elise', text: 'Hey guys, made this new chat for Saturday!', timestamp: '3:15 PM' },
      { id: 'm2', senderId: 'elise', text: 'Roller rink for Maya\'s bday 🎉 just us 3 for now', timestamp: '3:16 PM' },
      { id: 'm3', senderId: 'marcus', text: 'Sweet! Wait does Priya know?', timestamp: '3:18 PM' },
      { id: 'm4', senderId: 'elise', text: 'No. Don\'t tell Priya, she\'ll be weird about it.', timestamp: '3:19 PM' },
      { id: 'm5', senderId: 'marcus', text: 'Haha okay true. Keep it lowkey.', timestamp: '3:20 PM' },
    ],
    pauseQuestion: 'Jonah is looking at this new chat. What does Jonah do?',
    choices: [
      {
        moveId: 'speak_up_kindly',
        title: 'Speak up kindly',
        description: 'Ask the side chat why Priya is being excluded before this grows.',
        wordingOptions: [
          {
            id: 'w1',
            label: 'Gentle & honest',
            text: 'Why would she be weird? Priya loves roller skating. We usually all hang out.',
          },
          {
            id: 'w2',
            label: 'Calm & direct',
            text: 'Keeping secret chats feels messy. If she finds out later it\'s going to hurt way more.',
          },
          {
            id: 'w3',
            label: 'Simple question',
            text: 'Can we just invite everyone like normal? It\'s less stressful that way.',
          },
        ],
        branchMessages: [
          { id: 'b1', senderId: 'elise', text: 'I just didn\'t want drama if she couldn\'t come.', timestamp: '3:22 PM' },
          { id: 'b2', senderId: 'marcus', text: 'Jonah\'s kinda right though, someone will slip up.', timestamp: '3:23 PM' },
          { id: 'b3', senderId: 'elise', text: 'Fine, I\'ll ask Maya if we can invite Priya too.', timestamp: '3:24 PM' },
        ],
        outcomeSummary:
          'Elise felt a bit defensive, but Marcus agreed that secrets hurt. The plan is opening back up.',
      },
      {
        moveId: 'check_in_privately',
        title: 'Check in privately with Elise',
        description: 'Message Elise 1-on-1 to understand why without putting her on the spot.',
        wordingOptions: [
          {
            id: 'w1',
            label: 'Curious & gentle',
            text: 'Hey Elise, did something happen between you and Priya? Just wondering about the side chat.',
          },
          {
            id: 'w2',
            label: 'Honest friend',
            text: 'Hey, I felt uncomfortable seeing Priya left out. Can we talk about it?',
          },
        ],
        branchMessages: [
          {
            id: 'b1',
            senderId: 'elise',
            text: 'She didn\'t sit with me yesterday so I was annoyed. But maybe I\'m overthinking it.',
            timestamp: '3:23 PM',
            isPrivateDM: true,
            recipientId: 'jonah',
          },
          {
            id: 'b2',
            senderId: 'jonah',
            text: 'Probably just an off day. She really likes you.',
            timestamp: '3:24 PM',
            isPrivateDM: true,
            recipientId: 'elise',
          },
          {
            id: 'b3',
            senderId: 'elise',
            text: 'Yeah you\'re right. I\'ll text her.',
            timestamp: '3:25 PM',
            isPrivateDM: true,
            recipientId: 'jonah',
          },
        ],
        outcomeSummary:
          'Talking 1-on-1 gave Elise room to admit she was hurt about something else without being defensive in front of Marcus.',
      },
      {
        moveId: 'wait_and_watch',
        title: 'Wait and watch',
        description: 'Jonah stays silent in the side chat to see what happens next.',
        isWaitAndWatch: true,
        followUpPrompt: 'Jonah didn\'t reply. On Monday, Priya hears someone mention the roller rink. What could Jonah do now?',
        branchMessages: [
          { id: 'b1', senderId: 'elise', text: 'See you guys Saturday at 2!', timestamp: '3:25 PM' },
          { id: 'b2', senderId: 'marcus', text: 'See ya 👍', timestamp: '3:26 PM' },
          { id: 'b3', senderId: 'system', text: 'Jonah didn\'t say anything. The secret stayed secret until Monday at lunch.', timestamp: '3:28 PM', isSystemNotice: true },
        ],
        outcomeSummary:
          'Nothing bad happened immediately in the chat, but keeping the secret made Monday at school tense.',
      },
    ],
    twoThingsCanBeTrue: [
      'Wanting a smaller hangout is normal AND keeping secret chats often hurts feelings.',
      'Jonah didn’t create the chat AND Jonah still had a voice.',
    ],
    discussionQuestions: [
      'Why do people make "side chats" instead of talking directly?',
      'How does it feel to find out a group chat was created without you?',
      'What is the difference between planning a surprise and excluding someone?',
    ],
    teacherNote: {
      listenFor:
        'Listen for whether students see "side chats" as innocent convenience or intentional exclusion. Notice if they recognize the fear of being excluded themselves.',
      followUpQuestion: 'How can friends set boundaries or plan events without making someone feel rejected?',
    },
  },
  {
    id: 'the-screenshot',
    number: 2,
    title: 'The Screenshot',
    subtitle: 'Sharing something funny that wasn’t meant for everyone',
    groupName: 'Afterschool Hangout',
    viewerRole: 'Devon',
    viewerId: 'devon',
    summary:
      'Keisha sends a stumble-filled voice note in class chat and laughs. Someone screenshots the text preview and shares it in another chat with "lol."',
    estimatedMinutes: 4,
    characters: [
      { id: 'keisha', name: 'Keisha', avatarColor: '#B5533F', initials: 'KE' },
      { id: 'leo', name: 'Leo', avatarColor: '#3B6E8C', initials: 'LE' },
      { id: 'chloe', name: 'Chloe', avatarColor: '#E8B04A', initials: 'CH' },
      { id: 'devon', name: 'Devon', avatarColor: '#2E7D6B', initials: 'DE', isViewer: true },
    ],
    noticePrompt: {
      heading: 'Notice first: A post forwarded without permission',
      body: 'You open a chat after school and see a screenshot of a friend stumble in another conversation.',
      reflectionPrompt: 'Take a breath. What happens in your chest or stomach when you see something private posted publicly?',
    },
    initialMessages: [
      { id: 'm1', senderId: 'leo', text: '[Screenshot of Keisha\'s voice memo glitching: "umm like so basically I tripped over nothing wait haha"]', timestamp: '4:10 PM' },
      { id: 'm2', senderId: 'leo', text: 'lol look what she sent in the science group', timestamp: '4:11 PM' },
      { id: 'm3', senderId: 'chloe', text: '😂 she talks so fast sometimes', timestamp: '4:12 PM' },
    ],
    pauseQuestion: 'Devon wasn’t in that science chat. What does Devon do in this hangout chat?',
    choices: [
      {
        moveId: 'speak_up_kindly',
        title: 'Speak up kindly',
        description: 'Say something calm in the chat about keeping other chats private.',
        wordingOptions: [
          {
            id: 'w1',
            label: 'Light & firm',
            text: 'Keisha was just laughing at herself. No need to post it here.',
          },
          {
            id: 'w2',
            label: 'Curious & fair',
            text: 'Did Keisha say it was okay to screenshot that? Feels kinda private.',
          },
        ],
        branchMessages: [
          { id: 'b1', senderId: 'leo', text: 'Chill it\'s not that serious', timestamp: '4:14 PM' },
          { id: 'b2', senderId: 'chloe', text: 'Actually yeah, I\'d hate if someone screenshotted my voice note', timestamp: '4:15 PM' },
          { id: 'b3', senderId: 'leo', text: 'k deleted it', timestamp: '4:16 PM' },
        ],
        outcomeSummary:
          'Leo grumbled at first, but Chloe backed Devon up and Leo took down the screenshot.',
      },
      {
        moveId: 'check_in_privately',
        title: 'Check in privately with Keisha',
        description: 'Send a quiet direct message to Keisha so she isn’t caught off guard.',
        wordingOptions: [
          {
            id: 'w1',
            label: 'Kind heads up',
            text: 'Hey Keisha! Someone posted a screenshot of your voice note in the other chat. Just wanted to give you a heads up.',
          },
          {
            id: 'w2',
            label: 'Supportive & gentle',
            text: 'Hey, I saw your funny clip. People are laughing with it, but let me know if you want me to ask Leo to take it down.',
          },
        ],
        branchMessages: [
          {
            id: 'b1',
            senderId: 'keisha',
            text: 'Ugh really? That was meant for our project group. Thanks for telling me.',
            timestamp: '4:17 PM',
            isPrivateDM: true,
            recipientId: 'devon',
          },
          {
            id: 'b2',
            senderId: 'devon',
            text: 'Yeah, I can ask Leo to delete it if you want.',
            timestamp: '4:18 PM',
            isPrivateDM: true,
            recipientId: 'keisha',
          },
          {
            id: 'b3',
            senderId: 'keisha',
            text: 'Please do, thanks Devon.',
            timestamp: '4:19 PM',
            isPrivateDM: true,
            recipientId: 'devon',
          },
        ],
        outcomeSummary:
          'Keisha was glad someone told her instead of letting it circulate behind her back.',
      },
      {
        moveId: 'redirect',
        title: 'Redirect',
        description: 'Change the topic to take the spotlight off the screenshot.',
        wordingOptions: [
          {
            id: 'w1',
            label: 'Homework question',
            text: 'Hey did anyone finish page 42 for science yet?',
          },
          {
            id: 'w2',
            label: 'Game invite',
            text: 'Who wants to hop on Roblox in 10 mins?',
          },
        ],
        branchMessages: [
          { id: 'b1', senderId: 'chloe', text: 'Me! Send code in 5', timestamp: '4:15 PM' },
          { id: 'b2', senderId: 'leo', text: 'Joining too', timestamp: '4:16 PM' },
        ],
        outcomeSummary:
          'The chat stopped talking about Keisha, but the screenshot is still sitting in the chat history.',
      },
    ],
    twoThingsCanBeTrue: [
      'Leo might have meant it as a light joke AND taking screenshots without permission breaks trust.',
      'Deleting the picture helps AND Keisha might still feel self-conscious.',
    ],
    discussionQuestions: [
      'Why is screenshotting a private chat different from sharing something in person?',
      'If you laughed when you first saw the screenshot, does that mean you did something bad?',
      'What can you do if a screenshot gets passed around at school?',
    ],
    teacherNote: {
      listenFor:
        'Listen for whether students normalize screenshotting as "just what everyone does." Guide them to see how digital content can outlive the moment and spread beyond the room.',
      followUpQuestion: 'What is a ground rule you and your friends could have about screenshots?',
    },
  },
  {
    id: 'the-pile-on',
    number: 3,
    title: 'The Pile-On',
    subtitle: 'When quick laughs snowball on one teammate',
    groupName: 'Soccer Squad',
    viewerRole: 'Noor',
    viewerId: 'noor',
    summary:
      'Ty mocks Sam for missing a play at practice. Bree and Dev quickly add laughing emojis. Sam replies "ok" and goes quiet.',
    estimatedMinutes: 4,
    characters: [
      { id: 'ty', name: 'Ty', avatarColor: '#3B6E8C', initials: 'TY' },
      { id: 'bree', name: 'Bree', avatarColor: '#B5533F', initials: 'BR' },
      { id: 'dev', name: 'Dev', avatarColor: '#E8B04A', initials: 'DE' },
      { id: 'sam', name: 'Sam', avatarColor: '#6B7A82', initials: 'SA' },
      { id: 'noor', name: 'Noor', avatarColor: '#2E7D6B', initials: 'NO', isViewer: true },
    ],
    noticePrompt: {
      heading: 'Notice first: When a joke starts to feel heavy',
      body: 'You are on the couch after soccer practice. Your phone buzzes with notifications from the team group chat.',
      reflectionPrompt: 'Take a breath. Where in your body do you feel it when a chat turns tense?',
    },
    initialMessages: [
      { id: 'm1', senderId: 'ty', text: 'sam wasn\'t even trying at practice lol.', timestamp: '5:02 PM' },
      { id: 'm2', senderId: 'bree', text: '😂', timestamp: '5:03 PM' },
      { id: 'm3', senderId: 'dev', text: '😂😂', timestamp: '5:03 PM' },
      { id: 'm4', senderId: 'ty', text: 'fr', timestamp: '5:04 PM' },
      { id: 'm5', senderId: 'sam', text: 'ok', timestamp: '5:05 PM' },
    ],
    pauseQuestion: 'Noor wasn\'t laughing. What does Noor do?',
    choices: [
      {
        moveId: 'check_in_privately',
        title: 'Check in privately',
        description: 'Send a direct message to Sam to let them know someone noticed.',
        wordingOptions: [
          {
            id: 'w1',
            label: 'Gentle & caring',
            text: 'Hey, that wasn\'t cool of them. You okay?',
          },
          {
            id: 'w2',
            label: 'Casual teammate',
            text: 'Hey Sam, saw the chat. Ty was being weird. You played fine today.',
          },
          {
            id: 'w3',
            label: 'Direct & affirming',
            text: 'Hey, don\'t listen to Ty. You worked hard today and we all have tough practices.',
          },
        ],
        branchMessages: [
          {
            id: 'b1',
            senderId: 'sam',
            text: 'thanks. kinda hurt.',
            timestamp: '5:07 PM',
            isPrivateDM: true,
            recipientId: 'noor',
          },
          {
            id: 'b2',
            senderId: 'noor',
            text: 'Totally get it. See you at practice tomorrow.',
            timestamp: '5:08 PM',
            isPrivateDM: true,
            recipientId: 'sam',
          },
          {
            id: 'b3',
            senderId: 'sam',
            text: 'Yeah, thanks for texting me Noor.',
            timestamp: '5:09 PM',
            isPrivateDM: true,
            recipientId: 'noor',
          },
        ],
        outcomeSummary:
          'Sam replies: "thanks. kinda hurt." The group chat is unchanged; Sam feels less alone, but the pile-on is still visible to the whole team.',
      },
      {
        moveId: 'speak_up_kindly',
        title: 'Speak up kindly',
        description: 'Say something supportive or fair directly in the Soccer Squad chat.',
        wordingOptions: [
          {
            id: 'w1',
            label: 'Direct & fair',
            text: 'Not really funny. Sam works hard at practice.',
          },
          {
            id: 'w2',
            label: 'Calm question',
            text: 'Come on, Sam played hard. Why say that?',
          },
          {
            id: 'w3',
            label: 'Warm teammate',
            text: 'I saw Sam sprint the whole scrimmage. That\'s not fair.',
          },
        ],
        branchMessages: [
          { id: 'b1', senderId: 'ty', text: 'relax.', timestamp: '5:07 PM' },
          { id: 'b2', senderId: 'bree', text: '[Bree quietly removed her reaction]', timestamp: '5:08 PM', isDeleted: true },
          { id: 'b3', senderId: 'dev', text: '...', timestamp: '5:08 PM' },
        ],
        outcomeSummary:
          'Ty replies "relax." Bree quietly deletes her emoji. Dev says nothing. The pile-on stopped growing.',
      },
      {
        moveId: 'redirect',
        title: 'Redirect',
        description: 'Change the subject to something helpful or practical for the team.',
        wordingOptions: [
          {
            id: 'w1',
            label: 'Practice time question',
            text: 'Is practice still at 4 tomorrow?',
          },
          {
            id: 'w2',
            label: 'Jersey question',
            text: 'Wait, did coach say we need our yellow jerseys tomorrow?',
          },
          {
            id: 'w3',
            label: 'Tournament question',
            text: 'Did anyone see the weekend game schedule yet?',
          },
        ],
        branchMessages: [
          { id: 'b1', senderId: 'bree', text: 'Yeah 4 at the field.', timestamp: '5:07 PM' },
          { id: 'b2', senderId: 'dev', text: 'Pretty sure yellow.', timestamp: '5:08 PM' },
          { id: 'b3', senderId: 'ty', text: 'yep.', timestamp: '5:09 PM' },
        ],
        outcomeSummary:
          'Someone answers and the pile-on fades away, but nobody checked in on Sam.',
      },
      {
        moveId: 'wait_and_watch',
        title: 'Wait and watch',
        description: 'Not ready to act yet. Pausing to see how the team responds.',
        isWaitAndWatch: true,
        followUpPrompt: 'It’s not too late. What could Noor do now?',
        branchMessages: [
          { id: 'b1', senderId: 'dev', text: 'anyone playing brawl stars?', timestamp: '5:09 PM' },
          { id: 'b2', senderId: 'ty', text: 'hop on', timestamp: '5:10 PM' },
          { id: 'b3', senderId: 'system', text: 'Sam left the chat.', timestamp: '5:12 PM', isSystemNotice: true },
        ],
        outcomeSummary:
          'The chat moved on. Sam logged off and left the chat. Noor is left with a heavy feeling, but can still reach out.',
      },
    ],
    twoThingsCanBeTrue: [
      'Sam felt less alone AND the group chat is still awkward.',
      'Reactions are messages too AND some people react without thinking.',
      'Speaking up can feel scary AND small actions count.',
    ],
    discussionQuestions: [
      'Is an emoji a message? Who is responsible here?',
      'What does Sam’s "ok" really mean?',
      'What’s one small thing someone who wasn’t laughing could do?',
    ],
    teacherNote: {
      listenFor:
        'Listen for whether students treat the emojis as "not real." Notice if they assume Ty is the only one who did something wrong, or if Bree and Dev also contributed by laughing.',
      followUpQuestion: 'What changes when five people react the same way instead of just one?',
    },
    isFullyImplemented: true,
  },
  {
    id: 'seen-but-not-answered',
    number: 4,
    title: 'Seen but Not Answered',
    subtitle: 'When silence feels louder than words',
    groupName: 'Science Study Pod',
    viewerRole: 'Jordan',
    viewerId: 'jordan',
    summary:
      'Ava asks the group: "Does anyone want to work on the science project together?" The chat shows "Seen by 6." An hour passes with total silence.',
    estimatedMinutes: 4,
    characters: [
      { id: 'ava', name: 'Ava', avatarColor: '#B5533F', initials: 'AV' },
      { id: 'jordan', name: 'Jordan', avatarColor: '#2E7D6B', initials: 'JO', isViewer: true },
      { id: 'liam', name: 'Liam', avatarColor: '#3B6E8C', initials: 'LI' },
      { id: 'maya', name: 'Maya', avatarColor: '#E8B04A', initials: 'MA' },
      { id: 'kai', name: 'Kai', avatarColor: '#6B7A82', initials: 'KA' },
      { id: 'sophia', name: 'Sophia', avatarColor: '#8C52FF', initials: 'SO' },
    ],
    noticePrompt: {
      heading: 'Notice first: When nobody replies',
      body: 'You see Ava\'s message. You open the app, read it, and put your phone down to grab a snack.',
      reflectionPrompt: 'Take a breath. Have you ever sent a text and watched the "Seen by" count climb without a reply?',
    },
    initialMessages: [
      { id: 'm1', senderId: 'ava', text: 'Hey guys, does anyone want to work on the science project together?', timestamp: '4:30 PM' },
      { id: 'm2', senderId: 'system', text: 'Seen by Jordan, Liam, Maya, Kai, Sophia, Ben', timestamp: '4:32 PM', isSystemNotice: true },
      { id: 'm3', senderId: 'system', text: '1 hour passes with no new messages...', timestamp: '5:32 PM', isSystemNotice: true },
    ],
    pauseQuestion: 'Jordan is one of the 6 who saw it. What does Jordan do?',
    choices: [
      {
        moveId: 'speak_up_kindly',
        title: 'Answer now in the group',
        description: 'Break the silence directly in the pod chat so Ava isn\'t left hanging.',
        wordingOptions: [
          {
            id: 'w1',
            label: 'Yes, let\'s partner',
            text: 'Hey Ava! Sorry, just saw this. I’d love to partner up.',
          },
          {
            id: 'w2',
            label: 'Already paired, but warm',
            text: 'Hey Ava, I already paired with Liam, but what topic are you thinking of picking?',
          },
          {
            id: 'w3',
            label: 'Friendly group nudge',
            text: 'Hey everyone, check your messages! Ava asked about project partners.',
          },
        ],
        branchMessages: [
          { id: 'b1', senderId: 'ava', text: 'Oh yay, thank you! I thought everyone was ignoring me haha', timestamp: '5:35 PM' },
          { id: 'b2', senderId: 'maya', text: 'Sorry Ava! Was at dentist. Still need a partner?', timestamp: '5:37 PM' },
        ],
        outcomeSummary:
          'One person replying broke the freeze. Other kids finally spoke up too.',
      },
      {
        moveId: 'check_in_privately',
        title: 'Check in privately with Ava',
        description: 'Send Ava a quick 1-on-1 note so she knows people aren\'t ignoring her on purpose.',
        wordingOptions: [
          {
            id: 'w1',
            label: 'Reassuring note',
            text: 'Hey Ava, people are probably doing homework or at sports right now. Don’t worry!',
          },
          {
            id: 'w2',
            label: 'Partner check',
            text: 'Hey! Saw your text in the pod. Did you find someone yet? If not we can work together.',
          },
        ],
        branchMessages: [
          {
            id: 'b1',
            senderId: 'ava',
            text: 'Thanks Jordan. Seeing "Seen by 6" made me feel like an invisible ghost.',
            timestamp: '5:36 PM',
            isPrivateDM: true,
            recipientId: 'jordan',
          },
          {
            id: 'b2',
            senderId: 'jordan',
            text: 'Total group brain freeze. It happens all the time.',
            timestamp: '5:37 PM',
            isPrivateDM: true,
            recipientId: 'ava',
          },
        ],
        outcomeSummary:
          'Ava felt validated immediately. Silence often feels like rejection even when it isn’t.',
      },
      {
        moveId: 'wait_and_watch',
        title: 'Wait and watch',
        description: 'Assume someone else will answer eventually.',
        isWaitAndWatch: true,
        followUpPrompt: 'Still no one replied by 8 PM. What could Jordan do before school tomorrow?',
        branchMessages: [
          { id: 'b1', senderId: 'system', text: 'Still no replies at 8:00 PM.', timestamp: '8:00 PM', isSystemNotice: true },
          { id: 'b2', senderId: 'ava', text: 'Never mind, I\'ll ask teacher for a solo topic.', timestamp: '8:15 PM' },
        ],
        outcomeSummary:
          'Because everyone assumed "someone else will answer," Ava felt pushed into working alone.',
      },
    ],
    twoThingsCanBeTrue: [
      'Nobody meant to ignore Ava AND Ava felt deeply ignored.',
      'People get busy after school AND a two-second reply changes everything.',
    ],
    discussionQuestions: [
      'Why does seeing "Seen by" without a reply feel so uncomfortable?',
      'Why do groups freeze when someone asks an open question?',
      'What can you do if you can\'t partner with someone, but want to be kind?',
    ],
    teacherNote: {
      listenFor:
        'Listen for the "bystander effect" in digital spaces: when 6 people see something, each person thinks someone else will reply.',
      followUpQuestion: 'How can our class agree to respond when a classmate reaches out in a shared channel?',
    },
  },
  {
    id: 'the-joke-that-landed-wrong',
    number: 5,
    title: 'The Joke That Landed Wrong',
    subtitle: 'Teasing that crossed an invisible line',
    groupName: 'Game Night Hub',
    viewerRole: 'Taylor',
    viewerId: 'taylor',
    summary:
      'Mateo jokes that Luca "always gets last place." Mateo meant it playfully, but Luca replies "haha" and stays off the game all week.',
    estimatedMinutes: 4,
    characters: [
      { id: 'mateo', name: 'Mateo', avatarColor: '#3B6E8C', initials: 'MA' },
      { id: 'luca', name: 'Luca', avatarColor: '#B5533F', initials: 'LU' },
      { id: 'taylor', name: 'Taylor', avatarColor: '#2E7D6B', initials: 'TA', isViewer: true },
    ],
    noticePrompt: {
      heading: 'Notice first: When friendly banter turns sour',
      body: 'You and your friends tease each other about games all the time. But sometimes what feels funny to one person stings another.',
      reflectionPrompt: 'Take a breath. Have you ever typed "haha" when you actually felt small or hurt inside?',
    },
    initialMessages: [
      { id: 'm1', senderId: 'mateo', text: 'gg everyone. except luca who always finds a way to get last place 😂💀', timestamp: '7:40 PM' },
      { id: 'm2', senderId: 'luca', text: 'haha', timestamp: '7:41 PM' },
      { id: 'm3', senderId: 'system', text: 'Luca is offline. (Has not joined the server for 4 days)', timestamp: 'Day 4', isSystemNotice: true },
    ],
    pauseQuestion: 'Taylor is friends with both of them. What does Taylor do?',
    choices: [
      {
        moveId: 'check_in_privately',
        title: 'Check in with Luca privately',
        description: 'Send Luca a direct message to see how he is really feeling.',
        wordingOptions: [
          {
            id: 'w1',
            label: 'Casual gamer check',
            text: 'Hey Luca, missed you on the server this week! You alright?',
          },
          {
            id: 'w2',
            label: 'Direct & caring',
            text: 'Hey, did Mateo’s comment after the match bother you? I noticed you haven’t logged on.',
          },
        ],
        branchMessages: [
          {
            id: 'b1',
            senderId: 'luca',
            text: 'Kinda yeah. He says it every single game and it stopped being funny two weeks ago.',
            timestamp: '7:45 PM',
            isPrivateDM: true,
            recipientId: 'taylor',
          },
          {
            id: 'b2',
            senderId: 'taylor',
            text: 'I hear you. Mateo doesn’t realize it. Want me to talk to him or do you want to?',
            timestamp: '7:46 PM',
            isPrivateDM: true,
            recipientId: 'luca',
          },
        ],
        outcomeSummary:
          'Luca opened up. Teasing that happens over and over wears people down even if they typed "haha."',
      },
      {
        moveId: 'get_backup',
        title: 'Talk to Mateo privately',
        description: 'Give Mateo a friendly heads up before Luca drifts away from the group.',
        wordingOptions: [
          {
            id: 'w1',
            label: 'Friendly friend nudge',
            text: 'Hey Mateo, Luca hasn’t been playing lately. I think the "last place" jokes might be wearing on him.',
          },
          {
            id: 'w2',
            label: 'Team suggestion',
            text: 'Hey man, let’s go easy on teasing Luca’s score. He looked kinda bummed out.',
          },
        ],
        branchMessages: [
          {
            id: 'b1',
            senderId: 'mateo',
            text: 'Wait really? He literally replied haha! I didn’t mean anything mean by it.',
            timestamp: '7:48 PM',
            isPrivateDM: true,
            recipientId: 'taylor',
          },
          {
            id: 'b2',
            senderId: 'mateo',
            text: 'Dang. I’ll text him and apologize. Thanks for telling me.',
            timestamp: '7:50 PM',
            isPrivateDM: true,
            recipientId: 'taylor',
          },
        ],
        outcomeSummary:
          'Mateo was surprised because Luca typed "haha," but he appreciated learning before the friendship broke.',
      },
      {
        moveId: 'redirect',
        title: 'Speak up in the chat with encouragement',
        description: 'Post in the chat celebrating a great play Luca made recently.',
        wordingOptions: [
          {
            id: 'w1',
            label: 'Game highlight',
            text: 'Luca carried our defense on round 2 though, that save was clutch.',
          },
        ],
        branchMessages: [
          { id: 'b1', senderId: 'mateo', text: 'True that save was crazy', timestamp: '7:45 PM' },
        ],
        outcomeSummary:
          'It balanced out the roast, but Luca still needs to know Mateo understands how he feels.',
      },
    ],
    twoThingsCanBeTrue: [
      'Mateo didn\'t mean to hurt Luca AND Luca was still hurt.',
      'Luca typed "haha" AND Luca did not think it was funny.',
    ],
    discussionQuestions: [
      'Why do people type "haha" or send laughing emojis when they are actually upset?',
      'How can you tell when friendly teasing has turned into picking on someone?',
      'What can you say to a friend who hurts someone without realizing it?',
    ],
    teacherNote: {
      listenFor:
        'Listen for students recognizing that "haha" is often defensive armor to avoid looking weak or sensitive.',
      followUpQuestion: 'How can friends set a signal for when teasing has gone too far?',
    },
  },
  {
    id: 'the-bot-in-the-chat',
    number: 6,
    title: 'The Bot in the Chat',
    subtitle: 'Shaming someone for asking for help',
    groupName: 'Class Math Lounge',
    viewerRole: 'Amir',
    viewerId: 'amir',
    summary:
      'Nia asks the class study bot a fractions question she was nervous to ask people. A classmate posts: "Why are you asking a bot? Can\'t you do it yourself?" Nia stops asking questions.',
    estimatedMinutes: 4,
    characters: [
      { id: 'nia', name: 'Nia', avatarColor: '#B5533F', initials: 'NI' },
      { id: 'zack', name: 'Zack', avatarColor: '#3B6E8C', initials: 'ZA' },
      { id: 'studybot', name: 'StudyBot', avatarColor: '#E8B04A', initials: 'AI' },
      { id: 'amir', name: 'Amir', avatarColor: '#2E7D6B', initials: 'AM', isViewer: true },
    ],
    noticePrompt: {
      heading: 'Notice first: When curiosity gets mocked',
      body: 'Someone in your class is trying to understand difficult homework. They take a chance and ask for an explanation.',
      reflectionPrompt: 'Take a breath. How does it feel when you have a question you’re scared sounds silly?',
    },
    initialMessages: [
      { id: 'm1', senderId: 'nia', text: '@StudyBot can you explain how to find the common denominator for 3/4 and 2/5?', timestamp: '6:15 PM' },
      { id: 'm2', senderId: 'studybot', text: 'Multiply denominators 4 and 5 to get 20, or find the lowest common multiple.', timestamp: '6:15 PM' },
      { id: 'm3', senderId: 'zack', text: 'Why are you asking a bot? Can’t you do it yourself? We learned that in 3rd grade 😂', timestamp: '6:16 PM' },
      { id: 'm4', senderId: 'nia', text: 'nvm', timestamp: '6:17 PM' },
    ],
    pauseQuestion: 'Amir is watching this math chat. What does Amir do?',
    choices: [
      {
        moveId: 'speak_up_kindly',
        title: 'Speak up kindly in the chat',
        description: 'Normalize asking questions and using tools to learn.',
        wordingOptions: [
          {
            id: 'w1',
            label: 'Supportive & normal',
            text: 'That\'s literally what the bot is here for. Fractions are confusing.',
          },
          {
            id: 'w2',
            label: 'Calm & direct',
            text: 'Asking questions to understand something is smart. No need to mock her.',
          },
          {
            id: 'w3',
            label: 'Relatable student',
            text: 'I was literally confused on that exact problem too Zack.',
          },
        ],
        branchMessages: [
          { id: 'b1', senderId: 'nia', text: 'Thanks Amir.', timestamp: '6:19 PM' },
          { id: 'b2', senderId: 'zack', text: 'Just saying it\'s easy', timestamp: '6:20 PM' },
          { id: 'b3', senderId: 'amir', text: 'Easy for some, tricky for others. That’s why we have a group.', timestamp: '6:21 PM' },
        ],
        outcomeSummary:
          'Zack shrugged it off, but Nia felt supported enough to keep working.',
      },
      {
        moveId: 'check_in_privately',
        title: 'Check in privately with Nia',
        description: 'Send Nia a DM offering to work on the math together.',
        wordingOptions: [
          {
            id: 'w1',
            label: 'Study buddy offer',
            text: 'Hey Nia, ignore Zack. I can explain common denominators if you still want help!',
          },
        ],
        branchMessages: [
          {
            id: 'b1',
            senderId: 'nia',
            text: 'That would be awesome, thank you! Zack always acts like he knows everything.',
            timestamp: '6:20 PM',
            isPrivateDM: true,
            recipientId: 'amir',
          },
        ],
        outcomeSummary:
          'Nia got the help she needed without the embarrassment of being put down in the main channel.',
      },
      {
        moveId: 'redirect',
        title: 'Redirect to the math assignment',
        description: 'Ask Zack about a harder question from the worksheet.',
        wordingOptions: [
          {
            id: 'w1',
            label: 'Challenge question',
            text: 'Okay genius Zack, what did you get for question 7 with the mixed fractions?',
          },
        ],
        branchMessages: [
          { id: 'b1', senderId: 'zack', text: 'Uh wait I haven\'t gotten to 7 yet', timestamp: '6:20 PM' },
        ],
        outcomeSummary:
          'It took the heat off Nia by questioning Zack, but Nia still felt stung by the first comment.',
      },
    ],
    twoThingsCanBeTrue: [
      'Tools like calculators and bots can help people learn AND asking for help takes vulnerability.',
      'Zack was showing off AND he made someone feel small.',
    ],
    discussionQuestions: [
      'Why is it easy for people to mock someone who asks for help online?',
      'How does a comment like Zack’s affect other quiet people in the chat?',
      'What makes a group chat a safe place to ask questions?',
    ],
    teacherNote: {
      listenFor:
        'Listen for whether students see asking questions as weakness or curiosity. Address how academic shaming silences the entire room.',
      followUpQuestion: 'How does someone’s comment stop other people from speaking up in class or in chat?',
    },
  },
  {
    id: 'the-friend-who-freezes',
    number: 7,
    title: 'The Friend Who Freezes',
    subtitle: 'When your fingers hover over the keyboard',
    groupName: 'Homeroom Chitchat',
    viewerRole: 'Rowan',
    viewerId: 'rowan',
    summary:
      'Rowan sees a hurtful message. Rowan drafts "that\'s not cool," worries the group will turn on him, deletes it, types it again, and deletes it again.',
    estimatedMinutes: 4,
    characters: [
      { id: 'cole', name: 'Cole', avatarColor: '#3B6E8C', initials: 'CO' },
      { id: 'jessie', name: 'Jessie', avatarColor: '#B5533F', initials: 'JE' },
      { id: 'rowan', name: 'Rowan', avatarColor: '#2E7D6B', initials: 'RO', isViewer: true },
      { id: 'sasha', name: 'Sasha', avatarColor: '#E8B04A', initials: 'SA' },
    ],
    noticePrompt: {
      heading: 'Notice first: Freezing is a natural reaction',
      body: 'You want to help, but your heart beats fast. You wonder: "What if they start picking on me next?"',
      reflectionPrompt: 'Take a breath. Feeling nervous does not mean you are a bad person. It means you care.',
    },
    initialMessages: [
      { id: 'm1', senderId: 'cole', text: 'jessie\'s art project looked like a kindergarten dog drew it lol', timestamp: '3:45 PM' },
      { id: 'm2', senderId: 'sasha', text: 'cole stop 😂', timestamp: '3:46 PM' },
      { id: 'm3', senderId: 'system', text: 'Rowan drafts: "that\'s not cool..." then erases it.', timestamp: '3:47 PM', isSystemNotice: true },
    ],
    pauseQuestion: 'Rowan’s draft box is empty again. Small moves count. What does Rowan do?',
    choices: [
      {
        moveId: 'check_in_privately',
        title: 'Check in privately (Low risk, high impact)',
        description: 'Send Jessie a quiet message where Cole can\'t see or argue.',
        wordingOptions: [
          {
            id: 'w1',
            label: 'Appreciating the art',
            text: 'Hey Jessie, I actually really liked the colors on your project. Cole is being mean.',
          },
          {
            id: 'w2',
            label: 'Simple supportive note',
            text: 'Hey Jessie, saw Cole\'s text. Don\'t let him get to you.',
          },
        ],
        branchMessages: [
          {
            id: 'b1',
            senderId: 'jessie',
            text: 'Thank you Rowan. I spent 4 hours on it and was literally tearing up.',
            timestamp: '3:50 PM',
            isPrivateDM: true,
            recipientId: 'rowan',
          },
        ],
        outcomeSummary:
          'Rowan didn\'t have to be a loud hero in public. A tiny private move rescued someone\'s afternoon.',
      },
      {
        moveId: 'get_backup',
        title: 'Get backup from Sasha',
        description: 'Message Sasha privately to ask if she will back you up in the main chat.',
        wordingOptions: [
          {
            id: 'w1',
            label: 'Ally invite',
            text: 'Hey Sasha, Cole’s being mean to Jessie. If I say something will you back me up?',
          },
        ],
        branchMessages: [
          {
            id: 'b1',
            senderId: 'sasha',
            text: 'Yes! Say something and I\'ll agree with you.',
            timestamp: '3:49 PM',
            isPrivateDM: true,
            recipientId: 'rowan',
          },
          { id: 'b2', senderId: 'rowan', text: 'Jessie worked super hard on that Cole.', timestamp: '3:51 PM' },
          { id: 'b3', senderId: 'sasha', text: 'Yeah seriously Cole, let\'s see your project then.', timestamp: '3:51 PM' },
        ],
        outcomeSummary:
          'Getting backup turned a scary solo stand into a shared moment of courage.',
      },
      {
        moveId: 'speak_up_kindly',
        title: 'Send a small, simple public reply',
        description: 'Keep it short so you don\'t get drawn into a big fight.',
        wordingOptions: [
          {
            id: 'w1',
            label: 'Simple & firm',
            text: 'Not cool Cole.',
          },
          {
            id: 'w2',
            label: 'Art defense',
            text: 'Her project was actually cool.',
          },
        ],
        branchMessages: [
          { id: 'b1', senderId: 'cole', text: 'just joking', timestamp: '3:50 PM' },
          { id: 'b2', senderId: 'jessie', text: '❤️', timestamp: '3:51 PM' },
        ],
        outcomeSummary:
          'Even three words ("Not cool Cole") was enough to plant a flag and make Jessie feel defended.',
      },
    ],
    twoThingsCanBeTrue: [
      'Speaking up can feel terrifying AND a small private note makes a huge difference.',
      'Rowan felt frozen at first AND Rowan still chose to act.',
    ],
    discussionQuestions: [
      'Why is it so common to type a message and then delete it?',
      'If you are afraid of being targeted next, what is the safest move you can make?',
      'How does having one friend back you up change how brave you feel?',
    ],
    teacherNote: {
      listenFor:
        'Validate the fear of retaliation. Many kids don\'t speak up because they don\'t want to become the next target. Teach that private check-ins and getting backup are real, powerful moves.',
      followUpQuestion: 'Why is a quiet private message just as brave as a public comment?',
    },
  },
];
