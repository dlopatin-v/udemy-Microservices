export default () => {
  return (
    <form>
      <h1>Sign Up</h1>
      <div className='for-group'>
        <label>Email Address</label>
        <input type='text' className='form-control'></input>
      </div>
      <div className='for-group'>
        <label>Password</label>
        <input type='password' className='form-control'></input>
      </div>
      <button className='btn btn-primary'>Sign Up</button>
    </form>
  )
}
