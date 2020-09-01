const regex = /^[a-z0-9-_]+$/i

const checkAlphanumeric = string => regex.test(string)

export default checkAlphanumeric