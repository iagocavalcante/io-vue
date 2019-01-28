import Api from './Api'

/**
 * @typedef {Rest}
 */
export default class Rest extends Api {
  /**
   * @type {String}
   */
  static resource = ''

  /**
   * @type {String}
   */
  id = 'id'

  /**
   * @param {String} resource
   * @param {Object} options
   * @param {Object} http
   */
  constructor (resource, options = {}, http = null) {
    super(Rest.normalize(Rest.base, resource), options, http)
  }

  /**
   * @return {this}
   */
  static build () {
    return new this(this.resource)
  }

  /**
   * @param {Object} record
   * @returns {*|PromiseLike<T | never>|Promise<T | never>}
   */
  create (record) {
    return this.post('', record)
  }

  /**
   * @param {String|Object} record
   * @returns {*|PromiseLike<T | never>|Promise<T | never>}
   */
  read (record = '') {
    return this.get(`${this.getId(record)}`)
  }

  /**
   * @param {Object} record
   * @returns {*|PromiseLike<T | never>|Promise<T | never>}
   */
  update (record) {
    return this.patch(`/${this.getId(record)}`, record)
  }

  /**
   * @param {Object} record
   * @returns {*|PromiseLike<T | never>|Promise<T | never>}
   */
  destroy (record) {
    return this.delete(`/${this.getId(record)}`)
  }

  /**
   * @param {Object} parameters
   * @returns {*|PromiseLike<T | never>|Promise<T | never>}
   */
  search (parameters = {}) {
    const queryString = ''
    // apply your logic here
    return this.get(`?${queryString}`).then(response => ({
      data: response
    }))
  }

  /**
   * @param {String|Object} record
   * @returns {String}
   */
  getId (record) {
    if (typeof record === 'object') {
      return record[this.id]
    }
    return String(record)
  }
}