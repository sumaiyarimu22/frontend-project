const EditForm = () => {
  return (
    <div className='form-area'>
      <form>
        <h2 className='form-title'>Edit Employee</h2>
        <label htmlFor='first_name'>First Name:</label>
        <input type='text' className='input' name='first_name' required />

        <label htmlFor='last_name'>Last Name:</label>
        <input type='text' className='input' name='last_name' required />

        <label htmlFor='email'>Email:</label>
        <input type='email' className='input' name='email' required />

        <label htmlFor='salary'>Salary:</label>
        <input type='number' className='input' name='salary' required />

        <label htmlFor='date'>Date:</label>
        <input type='date' className='input' name='date' required />

        <div className='input-btns'>
          <button type='submit' className='add-btn'>
            Update
          </button>
          <button type='reset' className='cancle-btn'>
            cancle
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
