import type { TranslationKeys } from "./en";

export const zhTW: Record<TranslationKeys, string> = {
  // Navigation & Sidebar
  "nav.coworker": "協作夥伴 (Coworker)",
  "nav.chat": "對話模式 (Chat)",
  "nav.code": "程式碼開發 (Code)",
  "nav.new_session": "建立新對話",
  "nav.start_as": "選擇身份開始對話：",
  "nav.manage_personas": "管理角色與 Persona…",
  "nav.sessions": "對話紀錄",
  "nav.inbox": "待辦/收件匣",
  "nav.scheduled": "自動化與定時任務",
  "nav.settings": "系統設定",
  "nav.integrations": "應用連接器與整合",
  "nav.audit": "操作紀錄審計",
  "nav.personas": "角色與專門特化",
  "nav.search": "搜尋對話紀錄...",

  // Sidebar Account & Cloud
  "sidebar.not_signed_in": "未登入 — 一鍵應用連線需要登入 OpenWorker Cloud",
  "sidebar.sign_in": "登入 OpenWorker Cloud",
  "sidebar.sign_out": "登出帳號",
  "sidebar.awaiting_attention": "個項目等待您的處理",
  "sidebar.working_now": "正在執行工作中...",
  "sidebar.sleeping": "待機中 (將定時自動喚醒)",

  // Composer
  "composer.placeholder": "請輸入您的需求，例如「準備客戶簡報」、「整理行事曆」、「撰寫週報」...",
  "composer.send": "發送",
  "composer.stop": "停止執行",
  "composer.approve": "核准執行",
  "composer.reject": "拒絕執行",
  "composer.attach": "附加檔案",

  // Settings
  "settings.title": "系統設定",
  "settings.subtitle": "管理 OpenWorker 在此電腦上的外觀與運作行為。",
  "settings.models": "模型與 Key 設定",
  "settings.general": "一般偏好",
  "settings.voice": "語音輸入",
  "settings.personas": "角色 Persona",
  "settings.connectors": "應用與工具整合",
  "settings.privacy": "隱私與本機存儲",
  "settings.api_key": "API 金鑰",
  "settings.save": "儲存變更",
  "settings.saved": "設定已成功儲存！",
  "settings.theme": "介面主題",
  "settings.theme_light": "淺色模式",
  "settings.theme_dark": "深色模式",
  "settings.theme_auto": "跟隨系統",
  "settings.theme_help": "自動跟隨您電腦作業系統的外觀主題設定。",
  "settings.always_on": "常駐與背景執行",
  "settings.open_at_login": "開機自動啟動",
  "settings.open_at_login_help": "當您登入電腦時自動啟動 OpenWorker。",
  "settings.keep_awake": "保持電腦喚醒狀態",
  "settings.keep_awake_help": "防止電腦進入睡眠狀態，以確保定時自動化任務能準時觸發執行。",
  "settings.trusted_workspaces": "受信任的工作區 (Trusted Workspaces)",
  "settings.trusted_workspaces_help": "受信任的專案可在 .coworker/config.toml 中設定指令授權。",
  "settings.files": "本機檔案位置",
  "settings.files_help": "每個對話都會在此位置下建立專屬資料夾以儲存檔案產出。",
  "settings.token_savings": "Token 額度省電最佳化",

  // Inbox & Automations
  "inbox.title": "待辦/收件匣 (Inbox)",
  "inbox.subtitle": "等待您核准、查看或回應的任務清單。",
  "inbox.empty": "目前收件匣中沒有待處理事項。",
  "scheduled.title": "自動化與定時任務 (Automations)",
  "scheduled.subtitle": "設定排程與常態性定時執行的工作流程。",
  "scheduled.new_button": "新增自動化任務",

  // Integrations & Activity
  "integrations.title": "應用連接器與整合 (Connectors)",
  "integrations.subtitle": "將 OpenWorker 連結至您的日常工具（GitHub, Slack, Jira, Notion 等）。",
  "audit.title": "操作紀錄審計 (Activity Log)",
  "audit.subtitle": "檢視 OpenWorker 執行的動作與指令歷史日誌。",

  // Onboarding & Intro
  "onboarding.welcome": "歡迎使用 OpenWorker",
  "onboarding.subtitle": "您的桌面 AI 協作夥伴，高效率交付成品。",
  "onboarding.get_started": "開始設定並體驗",
  "onboarding.select_model": "選擇您的 AI 模型提供商",

  // Common UI
  "common.cancel": "取消",
  "common.confirm": "確認",
  "common.delete": "刪除",
  "common.edit": "編輯",
  "common.loading": "載入中...",
  "common.success": "成功",
  "common.error": "發生錯誤",
  "common.browse": "瀏覽...",

  // Language Selector
  "language.select": "介面語言 (Language)",
  "language.zh-TW": "繁體中文",
  "language.en": "English",
};
