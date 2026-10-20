import { MoveDefinition } from '../types';

export const TOOLBOX_MOVES: MoveDefinition[] = [
  {
    id: 'check_in_privately',
    number: 1,
    name: 'Check in privately',
    shortAction: 'Send a direct message to the person who got hurt.',
    description: 'Send a direct message to the person who got hurt.',
    whenThisHelps: 'Makes someone feel seen and less alone right away, without putting them on the spot in front of everyone.',
    whatToWatchOutFor: 'The main group chat stays the same, and the other kids might assume nobody minded what happened.',
    iconName: 'MessageCircle',
    accentColor: '#2E7D6B',
  },
  {
    id: 'speak_up_kindly',
    number: 2,
    name: 'Speak up kindly',
    shortAction: 'Say something supportive or fair in the group chat.',
    description: 'Say something supportive or fair in the group chat.',
    whenThisHelps: 'Shows the whole room that kindness is normal here. It can pause a pile-on before it snowballs.',
    whatToWatchOutFor: 'People might get defensive or say "it was just a joke." Keeping your words calm, short, and clear works best.',
    iconName: 'HeartHandshake',
    accentColor: '#B5533F',
  },
  {
    id: 'redirect',
    number: 3,
    name: 'Redirect',
    shortAction: 'Change the subject to something helpful or encouraging.',
    description: 'Change the subject to something helpful or encouraging.',
    whenThisHelps: 'Shifts attention away from the hurtful comment and gives everyone an easy, graceful way to move forward.',
    whatToWatchOutFor: 'It changes what people are talking about, but it doesn’t check on the hurt person or repair what was said.',
    iconName: 'Compass',
    accentColor: '#E8B04A',
  },
  {
    id: 'get_backup',
    number: 4,
    name: 'Get backup',
    shortAction: 'Ask a friend to join you, or ask an adult.',
    description: 'Ask a friend to join you, or ask an adult.',
    whenThisHelps: 'Standing up is much easier when two or three people stand together. Allies give each other quiet confidence.',
    whatToWatchOutFor: 'Pick a friend who can stay calm, rather than someone who might fire back angry insults and escalate things.',
    iconName: 'Users',
    accentColor: '#3B6E8C',
  },
  {
    id: 'wait_and_watch',
    number: 5,
    name: 'Wait and watch',
    shortAction: 'Not ready to act yet. Pausing to observe with a plan to check back.',
    description: 'Not ready to act yet. This is allowed, but it comes with a "check back in later" step so it isn’t the end of the story.',
    whenThisHelps: 'Gives your nervous system a moment to breathe when you feel shocked, confused, or unsure what is safe.',
    whatToWatchOutFor: 'If nobody ever acts, the hurt person stays alone and the hurtful behavior feels approved. Waiting needs a next step.',
    iconName: 'Eye',
    accentColor: '#6B7A82',
  },
];

export const ADULT_BACKUP_GUIDE = {
  title: 'Know when to get a trusted adult',
  tagline: 'Getting an adult is never tattling. It is taking care of each other.',
  corePrinciple:
    'You never have to handle big or dangerous things by yourself. Asking a trusted teacher, parent, or counselor is an act of courage.',
  whenToTell: [
    'Someone is being threatened or talked to in a scary way.',
    'Someone might be in danger of physical or emotional harm.',
    'A person asks people to stop, but the behavior keeps happening day after day.',
    'You tried a small move, and the situation got bigger or meaner.',
  ],
  howToTell:
    'Find a quiet moment. Say: "Something came up in our group chat that I’m worried about. Can I show you or tell you what happened?"',
};
