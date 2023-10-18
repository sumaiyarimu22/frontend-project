import { useState } from "react";
import { DataProvider } from "../layout/Main";
import { useContext } from "react";

const FORM_INFO = {
  name: "",
  email: "",
  country: "",
  bio: "",
  birthday: "",
  gender: "",
  skills: [],
  agree: false,
  group: "",
};

const Home = () => {
  const [input, setInput] = useState({ ...FORM_INFO });
  const { name, email, country, bio, birthday, gender, skills, agree, group } =
    input;
  const { updateFormData } = useContext(DataProvider);

  const handleOnChange = (e) => {
    setInput({
      ...input,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput({
      ...input,
    });
    updateFormData(input);
  };

  const handleSkillChange = (e) => {
    if (e.target.checked) {
      setInput({ ...input, skills: [...input.skills, e.target.value] });
    } else {
      const skills = input.skills.filter((skill) => skill !== e.target.value);
      setInput({ ...input, skills });
    }
  };

  return (
    <div className='w-full flex justify-center items-center bg-orange-50'>
      <form
        className='flex flex-col gap-5 bg-orange-100 p-14 my-10'
        onSubmit={handleSubmit}
      >
        <div className='flex gap-2 items-center'>
          <label htmlFor='name' className='font-medium'>
            name:
          </label>
          <input
            value={name}
            onChange={handleOnChange}
            type='text'
            placeholder='Enter Your name'
            id='name'
            name='name'
            required
            className='bg-transparent border border-gray-400 w-full p-2 outline-none rounded-md '
          />
        </div>
        <div className='flex gap-2 items-center'>
          <label htmlFor='email' className='font-medium'>
            email:
          </label>
          <input
            value={email}
            onChange={handleOnChange}
            type='email'
            placeholder='Enter Your Email'
            required
            id='email'
            name='email'
            className='bg-transparent border border-gray-400 w-full p-2 outline-none rounded-md '
          />
        </div>
        <select
          value={country}
          required
          onChange={handleOnChange}
          name='country'
          className='bg-transparent border border-gray-400 w-full p-2 outline-none rounded-md'
        >
          <option value=''>select country</option>
          <option value='uk'>UK</option>
          <option value='japan'>Japan</option>
          <option value='india'>India</option>
        </select>
        <textarea
          value={bio}
          required
          onChange={handleOnChange}
          name='bio'
          placeholder='Tell me you Bio'
          className='bg-transparent border border-gray-400 w-full p-2 outline-none rounded-md'
        ></textarea>
        <input
          value={birthday}
          required
          onChange={handleOnChange}
          type='date'
          name='birthday'
          placeholder='birthday'
          className='bg-transparent border border-gray-400 w-full p-2 outline-none rounded-md'
        />
        <div
          className='flex gap-3'
          value={gender}
          onChange={handleOnChange}
          required
        >
          <p className='font-medium'>Select gender :</p>
          <input type='radio' name='gender' value='male' />
          Male
          <input type='radio' name='gender' value='female' />
          Female
          <input type='radio' name='gender' value='other' />
          Other
        </div>
        <div
          className='flex gap-3'
          value={skills}
          onChange={handleSkillChange}
          required
        >
          <p className='font-medium'>Skills:</p>
          <input type='checkbox' name='skills' value='java' />
          Java
          <input type='checkbox' name='skills' value='c++' />
          C++
          <input type='checkbox' name='skills' value='javascript' />
          Javascript
          <input type='checkbox' name='skills' value='python' />
          Python
          <input type='checkbox' name='skills' value='typescript' />
          Typescript
        </div>
        <div>
          <input
            required
            type='checkbox'
            name='agree'
            value={agree}
            onChange={handleOnChange}
          />{" "}
          I agree with condition
        </div>
        <div
          value={group}
          onChange={handleOnChange}
          required
          className='flex gap-3'
        >
          <label htmlFor='group'>Group:</label>
          <input type='radio' name='group' value='home' />
          Home
          <input type='radio' name='group' value='office' />
          Office
        </div>
        <button
          type='submit'
          className='font-medium bg-orange-400 text-white py-4 text-lg'
        >
          Show Details
        </button>
      </form>
    </div>
  );
};

export default Home;
