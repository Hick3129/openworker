# OpenWorker 繁體中文說明文件

**[openworker.com](https://openworker.com)** · [下載](#下載) · [問題回報 (Issues)](https://github.com/andrewyng/openworker/issues)

> **Beta** - OpenWorker 目前處於公開測試階段：已可完全使用、支援自動更新，我們正積極修復細節問題。歡迎提交 [Issues](https://github.com/andrewyng/openworker/issues)。

**能為您高效率完成日常工作的 AI 桌面協作夥伴。** OpenWorker 是一款開源的 AI 同事，常駐於您的桌面，傳遞的是**已完成的成果物**，而不僅僅是文字對話：例如一份精美的文件、附帶數據的 Slack 回覆、更新後的行事曆，或是整理好的收件匣。

本專案於您的本機電腦執行，且不綁定任何單一模型：您可以自行帶入 OpenAI、Anthropic、Google 或開源模型提供商的 API Key，或者使用 Ollama 進行完全本機端運作。您的資料只有在您選擇的模型與整合工具運作時才會離開您的電腦。

---

## 下載

[**⬇ macOS (Apple Silicon)**](https://download.openworker.com/mac)  
<sub>macOS 12+ · 已簽署與公證 · 支援自動更新</sub>

[**⬇ Windows 10/11 (x64)**](https://download.openworker.com/windows)  
<sub>版本簽署進行中，Windows SmartScreen 可能會跳出提示警告</sub>

開啟應用程式，新增模型 Key（或指向 Ollama），即可讓它開始為您完成真實任務。

---

## 運作原理

1. **告訴 OpenWorker 您想要產出的成果** — 例如「準備一份客戶簡報」、「整理我的行事曆」、「草擬報告」、「檢查 Jira 與 GitHub 的發行進度」。
2. **拆解步驟** — 它會自動拆解任務步驟，並橫跨您的桌面、檔案與連線的應用程式執行工作。
3. **主動核准** — 在執行任何具影響力的操作前（發送訊息、修改行事曆、執行指令），它會先尋求您的確認與核准。
4. **交付成品** — 您會獲得最終產出的成果檔案，而非僅僅是一張待辦清單。

系統架構示意：

```text
┌────────────────────────────────────────────────┐
│             OpenWorker 桌面應用程式             │  原生 Shell + GUI 介面
├────────────────────────────────────────────────┤
│           本機 Agent 伺服器 (Python)           │  引擎 · 工具 · 連接器 - 基於 aisuite
├───────────────┬────────────────┬───────────────┤
│  您的本機檔案  │   您的工具     │   您的模型    │  使用您的 Key 在本機端
│  與終端機指令 │ 25+ 應用連接器 │ 支援各家提供商 │  完全掌控運作
└───────────────┴────────────────┴───────────────┘
```

---

## 主要功能

- **產出真實成果物**：文件、試算表、報告與網頁會直接存為本機檔案，方便您開啟與分享。
- **支援 Slack 整合**：在 Channel 中 `@OpenWorker`；桌面端即會開啟 Session，利用您的工具完成工作並回覆於討論串中。
- **整合日常工具**：支援 25+ 種整合（包含 GitHub, Slack, Jira, Notion, Linear, HubSpot, Outlook, monday.com, Gmail, Google Calendar），以及您的**終端機與本機檔案**。任何支援 [MCP](https://modelcontextprotocol.io/) 的工具皆可輕鬆串接。
- **排程自動化**：建立常態性工作的自動化任務（如晨間簡報、週報匯整、Channel 監控）。
- **核准機制 (Ask before acting)**：寫入、發送訊息與 Shell 指令皆需經過您的核准，避免誤操作。

---

## 支援的模型提供商

預設支援：
**OpenAI · Anthropic · Google Gemini · Inkling · GLM · DeepSeek · Kimi · Qwen · MiniMax · Mistral · Grok (xAI)**，並可透過 **Together** / **Fireworks** 載入開源模型，或透過 **Ollama** 執行本機模型。

---

## 隱私與安全

OpenWorker 採用 **Local-first (本機優先)** 設計。所有數據（Agent 循環、對話紀錄、連接器 Token 與 API Key）皆安全存儲於您電腦的本機金庫中。

---

## 從原始碼運行 (Run from source)

**前置需求**：Python 3.10+、Node 20+ 以及 Rust 工具鏈（Rustup，用於 Tauri 桌面殼）。

```shell
git clone https://github.com/Hick3129/openworker
cd openworker

# 1. 初始化建立 Python 虛擬環境 (.venv)
# (Windows 環境請於 Git Bash 或 PowerShell 執行)
bash packaging/setup_dev_env.sh

# 2. 啟動本機 Agent 伺服器
.venv/Scripts/openworker-server.exe --cwd ~/some/project --port 8765

# 3. 於第二個終端機啟動前端介面 (GUI)
cd surfaces/gui
npm install
npm run dev        # Vite 開發伺服器
```

若要執行完整 Tauri 桌面應用程式，請在 Step 3 執行 `npm run tauri dev`。

---

## 專案目錄結構

| 目錄 | 內容說明 |
|---|---|
| `coworker/` | Python 後端 — Agent 引擎、模型提供商、連接器、MCP 用戶端、記憶體、自動化 |
| `surfaces/gui/` | 桌面應用 UI — React 介面 + Tauri 桌面殼 |
| `stt/` | 語音輸入 Speech-to-Text 輔助模組 (Rust) |
| `packaging/` | 安裝包構建腳本 (macOS DMG, Windows)、自動更新與開發環境設定 |
| `docs/` | 設計規範與決策紀錄 |
| `tests/` | 後端測試套件 |

---

## 授權條款 (License)

[MIT License](LICENSE)
