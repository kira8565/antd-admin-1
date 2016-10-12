import './index.html';
import './index.less';
import 'antd/dist/antd.css';
import dva from 'dva';

// 1. Initialize
const app = dva();

// 2. Plugins
//app.use({});

// 3. Model
app.model(require('./models/index'));
app.model(require('./models/authors'));
app.model(require('./models/works'));
app.model(require('./models/beacons'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
