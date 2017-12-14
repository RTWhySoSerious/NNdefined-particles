export default {
  Required: (_val, _length) => (_length === 0 ? null : _val),
  NotRequired: _val => (_val),
  RequiredLength: (_val, _length, _l) => ((_length === 0 || _length !== _l) ? null : _val),
  NotRequiredLength: (_val, _length, _l) => ((_length !== _l) ? null : _val),
  ValidNumbers: (_val, _length) => {
    if (_val.match(/[0-9]/g) === null && _length !== 0) return [true, 'Use only numbers', '']
    else return [false, '', _val]
  }
}
