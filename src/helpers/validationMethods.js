import Parse from './validationHelpers'

export default {
  NoValidate: (_val, _req) => ((Parse[_req](_val, _val.split('').length) !== null)
    ? [false, '', _val]
    : (Parse[_req](_val, _val.split('').length) === null)
    ? [true, 'Required', '']
    : [true, 'Required', '']
  ),
  Letters: (_val, _req) => {
    if (Parse[_req](_val, _val.split('').length) !== null) {
      try {
        const matchedL = _val.match(/[A-Z,a-z]/g).length
        const inputL = _val.split('').length
        return (matchedL === inputL)
        ? [false, '', _val]
        : (matchedL !== inputL)
        ? [true, 'Use only letters', _val.slice(0, inputL - 1)]
        : [true, 'Required!', '']
      } catch (error) {}
    } else return [true, 'Required', '']
    return [true, 'Use only letters', '']
  },
  Digits: (_val, _req) => {
    if (Parse[_req](_val, _val.split('').length) !== null) {
      try {
        const matchedL = _val.match(/[0-9]/g).length
        const inputL = _val.split('').length
        return (matchedL === inputL)
        ? [false, '', _val]
        : (matchedL !== inputL)
        ? [true, 'Use only numbers', _val.slice(0, inputL - 1)]
        : [true, 'Required!', '']
      } catch (error) {}
    } else return [true, 'Required', '']
    return Parse.ValidNumbers(_val, _val.split('').length) || [false, '', '']
  },
  DigitsLength: (_val, _req, _l) => {
    _val.split('').map(i => (
      (i.match(/[0-9]/g) === null) ? [true, 'Must be ' + _l + ' digits', '']
      : [true, 'Must be ' + _l + ' digits', '']
    ))
    if (Parse[_req](_val, _val.split('').length, _l) !== null) {
      try {
        const matchedL = _val.match(/[0-9]/g).length
        const inputL = _val.split('').length
        return (matchedL === inputL)
        ? [false, '', _val]
        : (matchedL !== inputL)
        ? [true, 'Use only numbers', _val.slice(0, inputL - 1)]
        : [true, 'Required!', '']
      } catch (error) {}
    } else return [true, 'Must be ' + _l + ' digits', '']
    return [true, 'Use only numbers', '']
  },
  Email: (_val) => {
    const regular = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!regular.test(_val) && _val.split('').length !== 0) return [true, 'Invalid email', '']
    else return [false, '', _val]
    return [true, 'Required!', '']
  }
}
