import {buildLegacyTheme} from 'sanity'

const props = {
  '--my-ivory': '#F5F9E9',
  '--my-black': '#1C2121',
  '--my-green': '#36453B',
  '--my-ltgreen': '#55605D',
  '--my-ltblue': '#546363',
  '--my-gray': '#A3A89D',
  '--my-sage': '#C2C1A5',
  '--my-brand': '#869898',
  '--my-orange': '#F39237',
  '--my-red': '#5C0029',
  '--my-brtgreen': '#87A878',
}

export const myTheme = buildLegacyTheme({
  //  Base theme colors
  '--black': props['--my-black'],
  '--white': props['--my-ivory'],

  '--gray': props['--my-gray'],

  '--brand-primary': props['--my-brand'],

  // Default button
  '--default-button-color': '#666',
  '--default-button-primary-color': props['--my-brand'],
  '--default-button-success-color': props['--my-brtgreen'],
  '--default-button-warning-color': props['--my-orange'],
  '--default-button-danger-color': props['--my-red'],

  // State
  '--state-info-color': props['--my-brand'],
  '--state-success-color': props['--my-brtgreen'],
  '--state-warning-color': props['--my-orange'],
  '--state-danger-color': props['--my-red'],

  // Navbar
  '--main-navigation-color': props['--my-black'],
  '--main-navigation-color--inverted': props['--my-black'],

  '--focus-color': props['--my-brand'],
})
