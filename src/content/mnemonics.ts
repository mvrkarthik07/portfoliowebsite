export const mnemonics = [
  { command: 'WORK', aliases: ['PROJ', 'W'], description: 'Focus the work blotter', shortcut: '2' },
  { command: 'EXP', aliases: ['CAREER', 'E'], description: 'Focus experience', shortcut: '5' },
  { command: 'CV', aliases: ['RESUME'], description: 'Open résumé PDF', shortcut: '6' },
  { command: 'MSG', aliases: ['CONTACT', 'EMAIL'], description: 'Copy email and focus contact', shortcut: '5' },
  { command: 'ABOUT', aliases: ['BIO'], description: 'Open biography', shortcut: '' },
  { command: 'ARCH', aliases: ['POSTERS'], description: 'Open visual archive', shortcut: '' },
  { command: 'BRAIN', aliases: ['WQ'], description: 'Open WorldQuant position', shortcut: '' },
  { command: 'HELP', aliases: ['?'], description: 'Show commands and shortcut setting', shortcut: '?' },
] as const
