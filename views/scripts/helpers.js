const _ = require('underscore')
const moment = require('moment');
const { isString } = require('underscore');

const routes = [
  'lux'
  , 'buttons'
  , 'containers'
  , 'dialogs'
  , 'forms'
  , 'indicators'
  , 'navbar'
  , 'navs'
  , 'progress'
  , 'tables'
  , 'typography'
];

const formats = {
  moment: 'ddd, MM-DD-YYYY'
  , picker: 'D, MM-d-yy'
}

const helpers = () => {
  return {
    routes
    , el: (id) => document.getElementById(id)
    , eq: (one, two) => !eq(one == two)
    , notEq: (one, two) => one !== two
    , select: (val, comp) => {
      return val == comp
        ? 'selected'
        : ''
    }
    , checked: (isChecked) => (isChecked) ? 'checked' : null
    , isArray: (val) => {
      return Array.isArray(val) && val.length > 0;
    }
    , luxes: (type = 'button') => {
      let dropdown = (r, p) => `<a class="dropdown-item" href="/${p}">${r}</a>`;
      let button = (r, p) => `<button type="button" onclick="document.location.href='/${p}" class="btn btn-primary btn-lg btn-block">${r}</button>`;
      let results = ''
      routes.forEach((route, i) => {
        let path = i > 0 ? `lux/${route}` : route;
        results += type === 'button'
          ? button(route, path)
          : dropdown(route, path);
      });
      return results;
    }
    , propsToString: (obj) => {
      let result = '';
      Object.entries(obj).forEach((k) => {
        result += `
          <div class="row col-3 item-property">${k[0]}</div>
          <div class="row col-9 item-value">${k[1]}</div>
        `;
      })
      return `
      <div class="row col-12 item-results">
        ${result}
      </div>
      `;
    }
    , isString: (str) => str && str.length > 0
    , stringify: (obj) => {
      return JSON.stringify(obj);
    }
    , MMDDYY: (date) => {
      return moment(date).format(formats.moment);
    }
    , styleBg: (imgSrc) => isString(imgSrc) ? `/images/wp/${imgSrc}` : null
    , cardType: (style, isBorder) => {
      let result = isBorder ? 'border-' : 'bg-';
      result += style;
      return result;
    }
    , multiple: (isMultiple) => (isMultiple) ? 'multiple=""' : null
    , valueOrNull: (value) => {
      if (_.isUndefined(value) || value == null) {
        return null
      }
      try {
        return String(value)
      }
      catch (e) {
        console.log(`Unable to convert ${value}`);
      }
      return null;
    }
    , modelPutAction: (url, id) => `/${url}/${id}`
    , colBreak: (index, val) => (index + 1) % val == 0
  }
}

module.exports = helpers
