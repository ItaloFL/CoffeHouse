import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string
    colors: {
      background: string
      secondaryColor: string
      cardColor: string
      primaryTextColor: string
      secondaryTextColor: string
      formBackgroudColor: string
      footerListTitleColor: string
      footerListColor: string
      borderColor: string
    }
  }
}
