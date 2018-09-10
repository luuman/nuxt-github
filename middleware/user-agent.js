export default function (context) {
  context.userAgent = context.isServer ? context.req.headers['user-agent'] : navigator.userAgent
	console.log(context.userAgent)
}

// export default function ({ store, redirect }) {
//   // If the user is not authenticated
//   if (!store.state.authenticated) {
//     return redirect('/login')
//   }
// }
