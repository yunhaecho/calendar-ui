### [Calendar-ui](https://www.npmjs.com/package/@yundal/calendar-ui)

![npm](https://img.shields.io/npm/v/@yundal/calendar-ui)
![npm](https://img.shields.io/npm/dm/@yundal/calendar-ui)
![npm](https://img.shields.io/npm/dt/@yundal/calendar-ui)
---
Calendar-ui provides easy-to-use , yet simple react calendar component with convenient monthly navigation(prev, next).

Calendar's year and month are set based on the user's local timezone automatically.<br/>
You can mark a color dot on date but it's experimental stage.


### Installation
```
yarn add @yundal/calendar-ui
# or
npm install @yundal/calendar-ui
```

### Usage
```
import Calendar from '@yundal/calendar-ui';
import '@yundal/calendar-ui/index.css';

function App() {
  return <Calendar
            style?='whatever you want with Tailwind CSS. This is optional and the default is "w-550 p-5"'
            mockdata?={[id: "1", date: "2026-04-09", label: "meeting", color: "primary"]} 
        />;
}
```
<p align="center">
  <img src="https://github.com/user-attachments/assets/a1c8313f-5cc2-4a80-bc26-1832e3421567" alt="Calender Example" style="width: 400px"/>
</p>


### Features
📅 Simple monthly calendar view  
⬅️➡️ Previous/Next month navigation  
🎨 Customizable with Tailwind CSS  
🔧 TypeScript support  
🌍 Automatic timezone detection  

### Browser Support
Chrome, Firefox, Safari, Edge (modern versions)

### Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

### Changelog
See [CHANGELOG.md](CHANGELOG.md) for version history.

### License
---
MIT
