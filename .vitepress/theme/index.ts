import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'

import { theme, useOpenapi } from 'vitepress-openapi'
import 'vitepress-openapi/dist/style.css'

export default {
    extends: DefaultTheme,
} satisfies Theme