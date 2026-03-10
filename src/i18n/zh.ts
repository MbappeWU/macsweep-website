/**
 * 中文营销文案 — MacSweep 官网
 */
import type { TranslationKey } from './en'

export const zh: Record<TranslationKey, string> = {
  // ── Meta / SEO ──────────────────────────────────────────────
  'meta.home.title': 'MacSweep — 安全第一的 macOS 清理工具',
  'meta.home.description':
    'MacSweep 使用「先入废纸篓」安全删除技术清理 Mac，零风险。免费下载。',
  'meta.pricing.title': 'MacSweep 定价 — 免费版与专业版',
  'meta.pricing.description':
    '对比 MacSweep 免费版和专业版。免费开始清理，按需升级解锁全部 6 个模块。',
  'meta.download.title': '下载 MacSweep — macOS 清理工具',
  'meta.download.description':
    '下载 MacSweep — 安全第一的 macOS 清理工具。支持 macOS 12+ / Apple Silicon 与 Intel。',

  // ── Navigation ──────────────────────────────────────────────
  'nav.home': '首页',
  'nav.pricing': '定价',
  'nav.download': '下载',
  'nav.language': 'EN',

  // ── Hero ────────────────────────────────────────────────────
  'hero.tagline': '安全第一的 macOS 清理工具',
  'hero.headline': '你的文件安全是我们的第一优先级。',
  'hero.subheadline':
    'MacSweep 使用「先入废纸篓™」安全删除 — 所有文件先移入废纸篓，随时可恢复。',
  'hero.cta.download': '免费下载',
  'hero.cta.pricing': '查看定价',

  // ── Trash-First Safety ──────────────────────────────────────
  'safety.label': '先入废纸篓™ 技术',
  'safety.title': '永远不会误删文件。',
  'safety.subtitle':
    '其他工具直接永久删除文件。MacSweep 始终先移入废纸篓。',
  'safety.other.label': '其他工具',
  'safety.other.flow': '文件 → 永久删除',
  'safety.macsweep.label': 'MacSweep',
  'safety.macsweep.flow': '文件 → 废纸篓 → 你来决定',
  'safety.point.audit': '每次操作都有完整审计记录',
  'safety.point.history': '随时回顾清理历史',
  'safety.point.recovery': '通过废纸篓享有 30 天恢复期',
  'safety.point.noAdmin': '无需管理员权限',

  // ── Features ────────────────────────────────────────────────
  'features.label': '6 大智能模块',
  'features.title': '精准清理，零猜测。',
  'features.subtitle': '每个模块精确识别可安全清理的内容 — 你始终掌控一切。',
  'features.free': '免费',
  'features.pro': '专业版',
  'features.cache.name': '系统缓存',
  'features.cache.desc': '安全清理应用和系统缓存。',
  'features.logs.name': '日志文件',
  'features.logs.desc': '移除过期的诊断日志。',
  'features.downloads.name': '历史下载',
  'features.downloads.desc': '发现下载文件夹中被遗忘的文件。',
  'features.devjunk.name': '开发垃圾',
  'features.devjunk.desc': '清理 Xcode、npm 和构建产物。',
  'features.largefiles.name': '大文件',
  'features.largefiles.desc': '即时发现占用空间的大文件。',
  'features.leftovers.name': '残留文件',
  'features.leftovers.desc': '移除已卸载应用的残留文件。',

  // ── Privacy ─────────────────────────────────────────────────
  'privacy.title': '100% 本地运行，零数据收集。',
  'privacy.subtitle':
    'MacSweep 完全在你的 Mac 上运行。无需注册、无云端、无遥测。文件永远不会离开你的电脑。',
  'privacy.point.local': '所有扫描和清理均在本地运行',
  'privacy.point.noAccount': '无需注册账号',
  'privacy.point.noTelemetry': '零数据分析和遥测',
  'privacy.point.openSource': '透明且可审计',

  // ── Pricing (preview on homepage) ───────────────────────────
  'pricing.label': '简单定价',
  'pricing.title': '免费开始，按需升级。',
  'pricing.free.name': '免费版',
  'pricing.free.price': '¥0',
  'pricing.free.period': '永久免费',
  'pricing.free.modules': '包含 3 个模块',
  'pricing.free.limit': '每月 500 MB 清理额度',
  'pricing.free.safety': '先入废纸篓™ 安全删除',
  'pricing.free.cta': '免费下载',
  'pricing.pro.name': '专业版',
  'pricing.pro.price': '¥15',
  'pricing.pro.period': '/月',
  'pricing.pro.alt.yearly': '¥68/年',
  'pricing.pro.alt.lifetime': '¥198 买断',
  'pricing.pro.modules': '全部 6 个模块',
  'pricing.pro.unlimited': '无限清理',
  'pricing.pro.priority': '优先支持',
  'pricing.pro.cta': '升级到专业版',
  'pricing.compare': '查看详细对比 →',

  // ── Pricing page (full) ─────────────────────────────────────
  'pricingPage.title': '选择适合你的方案。',
  'pricingPage.subtitle': '两种方案均包含先入废纸篓™ 安全删除。随时升级。',
  'pricingPage.feature.cache': '系统缓存',
  'pricingPage.feature.logs': '日志文件',
  'pricingPage.feature.downloads': '历史下载',
  'pricingPage.feature.devjunk': '开发垃圾',
  'pricingPage.feature.largefiles': '大文件',
  'pricingPage.feature.leftovers': '残留文件',
  'pricingPage.feature.unlimited': '无限清理',
  'pricingPage.feature.safety': '先入废纸篓™ 删除',
  'pricingPage.feature.auditTrail': '完整审计记录',
  'pricingPage.faq.title': '常见问题',
  'pricingPage.faq.q1': 'MacSweep 可以免费使用吗？',
  'pricingPage.faq.a1':
    '可以！免费版包含 3 个模块（缓存、日志、下载），每月 500 MB 清理额度。',
  'pricingPage.faq.q2': '支持哪些付款方式？',
  'pricingPage.faq.a2':
    'MacSweep 专业版通过 Mac App Store 购买，支持 Apple Pay、信用卡和储值余额。',
  'pricingPage.faq.q3': '可以随时取消吗？',
  'pricingPage.faq.a3':
    '当然可以。你随时可以在 Apple ID 设置中取消订阅，无需任何理由。',
  'pricingPage.faq.q4': '有买断选项吗？',
  'pricingPage.faq.a4':
    '有 — 一次性支付 ¥198 即可终身使用所有专业版功能。',

  // ── Download page ───────────────────────────────────────────
  'downloadPage.title': '下载 MacSweep',
  'downloadPage.subtitle': '免费下载，即刻开始清理。',
  'downloadPage.cta': '下载 macOS 版',
  'downloadPage.version': '版本 1.0 · macOS 12+',
  'downloadPage.req.title': '系统要求',
  'downloadPage.req.os': 'macOS 12 Monterey 或更高版本',
  'downloadPage.req.arch': '支持 Apple Silicon 和 Intel',
  'downloadPage.req.size': '下载大小约 15 MB',
  'downloadPage.steps.title': '安装步骤',
  'downloadPage.steps.s1': '下载 DMG 文件',
  'downloadPage.steps.s2': '将 MacSweep 拖入「应用程序」',
  'downloadPage.steps.s3': '打开并开始首次扫描',

  // ── CTA Banner ──────────────────────────────────────────────
  'cta.title': '准备好释放磁盘空间了吗？',
  'cta.subtitle': '下载 MacSweep — 免费、安全、极速。',
  'cta.button': '免费下载',

  // ── Footer ──────────────────────────────────────────────────
  'footer.product': '产品',
  'footer.resources': '资源',
  'footer.legal': '法律',
  'footer.privacy': '隐私政策',
  'footer.terms': '服务条款',
  'footer.support': '支持',
  'footer.github': 'GitHub',
  'footer.copyright': '© {year} MacSweep. 保留所有权利。',
}
