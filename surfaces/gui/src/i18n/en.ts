export const en = {
  // Navigation & Sidebar
  "nav.coworker": "Coworker",
  "nav.chat": "Chat",
  "nav.code": "Code",
  "nav.new_session": "New Session",
  "nav.start_as": "Start a session as",
  "nav.manage_personas": "Manage personas…",
  "nav.sessions": "Sessions",
  "nav.inbox": "Inbox",
  "nav.scheduled": "Automations",
  "nav.settings": "Settings",
  "nav.integrations": "Connectors",
  "nav.audit": "Activity Log",
  "nav.personas": "Personas",
  "nav.search": "Search sessions...",

  // Sidebar Account & Cloud
  "sidebar.not_signed_in": "Not signed in — one-click connections need OpenWorker Cloud",
  "sidebar.sign_in": "Sign in to OpenWorker Cloud",
  "sidebar.sign_out": "Sign out",
  "sidebar.awaiting_attention": "awaiting your attention",
  "sidebar.working_now": "Working now",
  "sidebar.sleeping": "Sleeping (will wake itself)",

  // Composer
  "composer.placeholder": "Ask OpenWorker to prepare a brief, draft a report, untangle calendar...",
  "composer.send": "Send",
  "composer.stop": "Stop",
  "composer.approve": "Approve",
  "composer.reject": "Reject",
  "composer.attach": "Attach file",

  // Settings
  "settings.title": "Settings",
  "settings.subtitle": "How OpenWorker looks and behaves on this machine.",
  "settings.models": "Models",
  "settings.general": "General",
  "settings.voice": "Voice input",
  "settings.personas": "Personas",
  "settings.connectors": "Connectors & Integrations",
  "settings.privacy": "Privacy & Storage",
  "settings.api_key": "API Key",
  "settings.save": "Save",
  "settings.saved": "Saved successfully!",
  "settings.theme": "Theme",
  "settings.theme_light": "Light",
  "settings.theme_dark": "Dark",
  "settings.theme_auto": "Auto",
  "settings.theme_help": "Auto follows your operating system's appearance.",
  "settings.always_on": "Always-on",
  "settings.open_at_login": "Open at login",
  "settings.open_at_login_help": "Launch OpenWorker automatically when you sign in.",
  "settings.keep_awake": "Keep this system awake",
  "settings.keep_awake_help": "Prevent idle sleep so scheduled tasks fire on time.",
  "settings.trusted_workspaces": "Trusted workspaces",
  "settings.trusted_workspaces_help": "Trusted projects may manage their command allowances in .coworker/config.toml.",
  "settings.files": "Files",
  "settings.files_help": "Each conversation gets its own folder under this location.",
  "settings.token_savings": "Token savings",

  // Inbox & Automations
  "inbox.title": "Inbox",
  "inbox.subtitle": "Tasks, requests, and approvals awaiting your attention.",
  "inbox.empty": "Your inbox is empty.",
  "scheduled.title": "Automations",
  "scheduled.subtitle": "Automated and recurring tasks.",
  "scheduled.new_button": "New Automation",

  // Integrations & Activity
  "integrations.title": "Connectors & Integrations",
  "integrations.subtitle": "Connect OpenWorker to your everyday tools and apps.",
  "audit.title": "Activity Log",
  "audit.subtitle": "Audit history of actions executed by OpenWorker.",

  // Onboarding & Intro
  "onboarding.welcome": "Welcome to OpenWorker",
  "onboarding.subtitle": "Your AI desktop coworker that delivers finished work.",
  "onboarding.get_started": "Get Started",
  "onboarding.select_model": "Choose a Model Provider",

  // Common UI
  "common.cancel": "Cancel",
  "common.confirm": "Confirm",
  "common.delete": "Delete",
  "common.edit": "Edit",
  "common.loading": "Loading...",
  "common.success": "Success",
  "common.error": "Error",
  "common.browse": "Browse",

  // Language Selector
  "language.select": "Interface Language / 介面語言",
  "language.zh-TW": "繁體中文",
  "language.en": "English",
};

export type TranslationKeys = keyof typeof en;
