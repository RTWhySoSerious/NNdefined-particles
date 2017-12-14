<template>
  <div class="nn-input-container" v-bind:style="getStyles">
    <label 
      class="nn-input-container__label" 
      :class="parseRequiredStar"
    >
      {{ label }}
    </label>
    <input
      autocomplete="off"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      class="nn-input-container__input"
      :class="errorClassInput"
      @input="maskedInput"
      :value="inputValue"
      @blur="blurEvent"
    />
    <div 
      class="nn-error-tip-hidden"
      :class="errorClassTip"
      v-if="message"
    >
      {{ message }}
    </div>
  </div>
</template>

<script>
  import Validate from '../../helpers/validationMethods'

  export default {
    name: 'CustomInput',
    data() {
      return {
        inputValue: '',
        error: false,
        message: ''
      }
    },
    watch: {
      error() {},
      inputValue() {},
      message() {}
    },
    methods: {
      maskedInput(e) {
        this.inputValue = e.target.value
        const how = this.validParams[0]
        const req = this.validParams[1]
        const l = this.validParams[2]
        const parsedResult = (this.validParams[2])
        ? Validate[how](this.inputValue, req, l)
        : Validate[how](this.inputValue, req)
        this.error = parsedResult[0]
        this.message = parsedResult[1]
        parsedResult[3] = this.name
        try {
          this.$emit('inputVal', parsedResult)
        } catch (e) {

        }
      },
      blurEvent(e) {
        const req = this.validParams[1]
        const value = e.target.value
        if (value === '' && (req === 'Required' || req === 'RequiredLength')) {
          this.error = true
          this.message = 'Required'
          try {
            this.$emit('inputVal', [true, 'Required', ''])
          } catch (e) {}
        }
      }
    },
    computed: {
      getValue() {
        this.inputValue = this.beforeVal
      },
      getStyles() {
        return this.parseWidth
      },
      parseWidth() {
        return 'width:' + this.width
      },
      errorClassInput() {
        return {
          'nn-input-error': this.error
        }
      },
      errorClassTip() {
        return {
          'nn-error-tip-shown': this.error
        }
      },
      parseRequiredStar() {
        return (this.validParams[1] === 'Required' && this.mode !== 'auth')
        ? 'nn-reqired-field'
        : (this.validParams[1] === 'RequiredLength' && this.mode !== 'auth')
        ? 'nn-reqired-field'
        : ''
      }
    },
    mounted() {
      this.getValue
    },
    props: {
      label: {
        type: String,
        default: 'Label for input'
      },
      type: {
        type: String,
        default: 'text'
      },
      placeholder: {
        type: String,
        default: 'Input'
      },
      width: {
        type: String,
        default: '100%'
      },
      inputVal: {
        type: Function
      },
      name: String,
      beforeVal: String,
      validParams: Array,
      mode: {
        type: String,
        default: 'normal'
      }
    }
  }
</script>

<style lang="scss">
  .nn-input-error {
    border: 1px solid #ed3f14!important;
  }
  .nn-input-success {
    border: 1px solid #29ee2a!important;
  }
  .nn-error-tip-hidden {
    position: absolute;
    top: -10px;
    right: 0;
    line-height: 1;
    color: #fff;
    padding: 10px 0px 10px 12px;
    transition: color .2s ease-in-out;
  }
  .nn-error-tip-shown {
    color: #ed3f14!important;
  }
  .nn-reqired-field::before {
    content: "*";
    display: inline-block;
    margin-right: 4px;
    line-height: 1;
    font-family: SimSun;
    font-size: 12px;
    color: #ed3f14;
  }
  .nn-input-container {
      margin-bottom: 15px;
      vertical-align: top;
      position: relative;
    &__label {
      text-align: right;
      vertical-align: middle;
      float: left;
      font-size: 12px;
      color: #495060;
      line-height: 1;
      padding: 0px 12px 10px 0;
      box-sizing: border-box;
    }
    &__input {
      display: inline-block;
      width: 100%;
      height: 32px;
      line-height: 1.5;
      padding: 4px 7px;
      font-size: 12px;
      border: 1px solid #dddee1;
      border-radius: 4px;
      color: #495060;
      background-color: #fff;
      background-image: none;
      position: relative;
      cursor: text;
      transition: all .2s ease-in-out;
      &:focus {
        outline: 0;
        box-shadow: 1px 1px 1px 0px rgba(6, 1, 14, 0.2);
        transition: all .2s ease-in-out;
      }
    }
  }
</style>
