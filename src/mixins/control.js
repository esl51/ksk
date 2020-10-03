export const control = {
  data: () => ({
    id: null
  }),
  props: {
    name: { type: String, default: null },
    readonly: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    autofocus: { type: Boolean, default: false }
  },
  mounted () {
    this.id = 'control-' + this._uid
  }
}
