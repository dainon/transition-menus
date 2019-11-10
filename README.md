# my-component

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

# Transition-Menus

Transition-Menus is a simple fixed location animation wrapper.

A set of transition menus for [React](https://reactjs.com).

Features include:

- Fixed popup animation with user defined elements
- Flower style animation

# Installation and usage

The easiest way to use react-select is to install it from npm and build it into your app with Webpack.

```
yarn add transition-menus
```

Then use it in your app:

index.css

```css
.circle {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: solid 2px #aaaaaa;
}

.icon {
  position: absolute;
  margin: auto;
  left: 50%;
  top: 50%;
  font-size: 2em;
  transform: translate(-50%, -50%);
}
```

```js
import './index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  IconDefinition,
  faAddressBook,
  faAddressCard,
  faArrowAltCircleLeft,
  faBirthdayCake,
  faGlassCheers,
} from '@fortawesome/free-solid-svg-icons';

import { BottomPopup } from './../../src/index';

interface DemoProps {
  nada?: boolean;
}

interface DemoState {
  open: boolean;
}

interface Definitions {
  color: string;
  icon: IconDefinition;
}

const transparency = 0.7;
const colors = [
  `rgba(72, 175, 240, ${transparency})`,
  `rgba(61, 204, 145, ${transparency})`,
  `rgba(255, 179, 102, ${transparency})`,
  `rgba(255, 115, 115, ${transparency})`,
  `rgba(255, 110, 74, ${transparency})`,
  `rgba(255, 102, 161, ${transparency})`,
  `rgba(194, 116, 194, ${transparency})`,
  `rgba(173, 153, 255, ${transparency})`,
];

const definitons = new Array<Definitions>();
definitons.push({ color: colors[0], icon: faAddressBook });
definitons.push({ color: colors[1], icon: faAddressCard });
definitons.push({ color: colors[2], icon: faArrowAltCircleLeft });
definitons.push({ color: colors[3], icon: faBirthdayCake });
definitons.push({ color: colors[4], icon: faGlassCheers });

class Demo extends Component<DemoProps, DemoState> {
  private items: Array<JSX.Element> = new Array<JSX.Element>();

  constructor(props: DemoProps) {
    super(props);

    this.state = {
      open: false,
    };

    for (var item of definitons) {
      this.items.push(
        <div className="circle" style={{ backgroundColor: item.color }} onClick={() => this.toggleOpen()}>
          <FontAwesomeIcon className="icon" icon={item.icon} />
        </div>,
      );
    }

    document.body.style.backgroundColor = 'black';
  }

  private toggleOpen() {
    this.setState({ open: !this.state.open });
  }

  public render(): JSX.Element {
    console.log('STATE', this.state);
    return (
      <div>
        <h1>Bottom Popup</h1>
        <button onClick={() => this.toggleOpen()}>Toggle</button>
        <BottomPopup open={this.state.open} gutter={40} items={this.items} />
      </div>
    );
  }
}
```

## Props

Common props you may want to specify include:

- `open` - opens the control
- `gutter` - spacing between the elements
- `items` - list of JSX.Elements
- `animationDuration` - (optional) duration of the ease animation

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/transition-menus

<p>
  <a href="https://github.com/badges/shields/graphs/contributors" alt="Contributors">
      <img src="https://img.shields.io/github/contributors/badges/shields" /></a>
  <a href="#backers" alt="Backers on Open Collective">
      <img src="https://img.shields.io/opencollective/backers/shields" /></a>
  <a href="#sponsors" alt="Sponsors on Open Collective">
      <img src="https://img.shields.io/opencollective/sponsors/shields" /></a>
  <a href="https://github.com/badges/shields/pulse" alt="Activity">
      <img src="https://img.shields.io/github/commit-activity/m/badges/shields" /></a>
  <a href="https://circleci.com/gh/badges/shields/tree/master">
      <img src="https://img.shields.io/circleci/project/github/badges/shields/master" alt="build status"></a>
  <a href="https://circleci.com/gh/badges/daily-tests">
      <img src="https://img.shields.io/circleci/project/github/badges/daily-tests?label=service%20tests"
          alt="service-test status"></a>
  <a href="https://coveralls.io/github/badges/shields">
      <img src="https://img.shields.io/coveralls/github/badges/shields"
          alt="coverage"></a>
  <a href="https://lgtm.com/projects/g/badges/shields/alerts/">
      <img src="https://img.shields.io/lgtm/alerts/g/badges/shields"
          alt="Total alerts"/></a>
  <a href="https://github.com/badges/shields/compare/gh-pages...master">
      <img src="https://img.shields.io/github/commits-since/badges/shields/gh-pages?label=commits%20to%20be%20deployed"
          alt="commits to be deployed"></a>
  <a href="https://discord.gg/HjJCwm5">
      <img src="https://img.shields.io/discord/308323056592486420?logo=discord"
          alt="chat on Discord"></a>
  <a href="https://twitter.com/intent/follow?screen_name=shields_io">
      <img src="https://img.shields.io/twitter/follow/shields_io?style=social&logo=twitter"
          alt="follow on Twitter"></a>
</p>
