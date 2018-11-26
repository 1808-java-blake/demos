const dev = {
  context: 'http://localhost:3000/'
}

const prod = {
  context: 'http://ec2-18-237-118-203.us-west-2.compute.amazonaws.com:3001/'
}

export const environment = process.env.NODE_ENV === 'production'
  ? prod
  : dev
