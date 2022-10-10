import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string
    colors: {
      background: string
      secondaryColor: string
      thirdColor: string
      cardColor: string
      primaryTextColor: string
      secondaryTextColor: string
      secondaryTextState: string
      formBackgroudColor: string
      footerListTitleColor: string
      footerListColor: string
      borderColor: string
      themeHoverColor: string
      logoColor: string
      detailColor: string
      detailTitleColor: string
      depoimentBackground: string
      headerBorderBottomColor: string
      navigationMenuBackground: string
      navigationMenuBorder: string
      linkFooterHover: string
      hoverNavigationMenuItem: string
    }
  }
}
