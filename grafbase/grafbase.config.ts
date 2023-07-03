import { g, auth, config } from '@grafbase/sdk'

const User = g.model('User', {
  name: g.string().length({ min: 2, max: 20 }),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  githubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  projects: g.relation(() => Project).list().optional()
})

const Project = g.model('Project', {
  title: g.string().length({ min: 2, max: 20 }),
  description: g.string(),
  image: g.url(),
  liveSiteUrl: g.url(),
  githubUrl: g.url(),
  category: g.string().search(),
  createdBy: g.relation(() => User)
});

<<<<<<< HEAD
const jwt = auth.JWT({
	issuer: 'grafbase',
	secret: g.env('NEXTAUTH_SECRET'),
});

export default config({
  schema: g
=======
export default config({
  schema: g
  // Integrate Auth
  // https://grafbase.com/docs/auth
  // auth: {
  //   providers: [authProvider],
  //   rules: (rules) => {
  //     rules.private()
  //   }
  // }
>>>>>>> 6175946 (added grafbase schema and env file)
})
