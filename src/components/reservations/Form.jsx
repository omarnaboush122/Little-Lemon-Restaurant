import { Link } from "react-router-dom";

const Form = () => {
  return (
    <section className="p-8">
      <form className="flex flex-col justify-center items-center">
        <div className="mb-6">
          <label className="block" htmlFor="FirstName">
            First Name
          </label>
          <input
            className="bg-[#eee] border-0 outline-0 py-2 px-4 w-80 rounded-md"
            type="text"
            placeholder="e.g. Omar"
            id="FirstName"
          />
        </div>
        <div className="mb-6">
          <label className="block" htmlFor="LastName">
            Last Name
          </label>
          <input
            className="bg-[#eee] border-0 outline-0 py-2 px-4 w-80 rounded-md"
            type="text"
            placeholder="e.g. Naboush"
            id="LastName"
          />
        </div>
        <div className="mb-6">
          <label className="block" htmlFor="Email">
            Email
          </label>
          <input
            type="email"
            placeholder="e.g. omarnaboush509@gmail.com"
            id="Email"
            className="bg-[#eee] border-0 outline-0 py-2 px-4 w-80 rounded-md"
          />
        </div>
        <div className="mb-6">
          <label className="block" htmlFor="PhoneNumber">
            Phone Number
          </label>
          <input
            type="number"
            placeholder="e.g. 81 346 307"
            id="PhoneNumber"
            className="bg-[#eee] border-0 outline-0 py-2 px-4 w-80 rounded-md"
          />
        </div>
        <div className="mb-6">
          <label className="block" htmlFor="NumberofPeople">
            Number of People
          </label>
          <input
            type="number"
            id="NumberofPeople"
            className="bg-[#eee] border-0 outline-0 py-2 px-4 w-80 rounded-md"
          />
        </div>
        <div className="mb-6">
          <label className="block" htmlFor="SelectDate">
            Select Date
          </label>
          <input
            type="date"
            id="SelectDate"
            className="bg-[#eee] border-0 outline-0 py-2 px-4 w-80 rounded-md"
          />
        </div>
        <div className="mb-6">
          <label className="block" htmlFor="SelectTime">
            Select Time
          </label>
          <select
            id="SelectTime"
            className="bg-[#eee] border-0 outline-0 py-2 px-4 w-80 rounded-md"
          >
            <option value="17:00">17:00</option>
            <option value="17:30">17:30</option>
            <option value="19:30">19:30</option>
            <option value="21:00">21:00</option>
            <option value="21:30">21:30</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block" htmlFor="Occasion">
            Occasion
          </label>
          <select
            id="Occasion"
            className="bg-[#eee] border-0 outline-0 py-2 px-4 w-80 rounded-md"
          >
            <option value="none">None</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="engagment">Engagment</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block" htmlFor="Seatingpreferences">
            Seating preferences
          </label>
          <select
            id="Seatingpreferences"
            className="bg-[#eee] border-0 outline-0 py-2 px-4 w-80 rounded-md"
          >
            <option value="none">None</option>
            <option value="indoors">Indoors</option>
            <option value="outdoors(Patio)">Outdoors(Patio)</option>
            <option value="outdoors(SideWalk)">Outdoors(SideWalk)</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block" htmlFor="AdditionalComments">
            Additional Comments
          </label>
          <textarea
            className="bg-[#eee] border-0 outline-0 py-2 px-4 w-80 rounded-md resize-none"
            id="AdditionalComments"
            cols="50"
            rows="8"
            placeholder="Additional Comments"
          ></textarea>
        </div>
        <div className="flex flex-col items-center">
          <p className="mb-6 md:text-lg">
            Note: You cannot edit your reservation after submission. Please
            double-check your answer before submitting your reservation request.
          </p>
          <button
            type="submit"
            className="bg-[#f4ce14] font-bold py-2 px-4 rounded-md border hover:bg-[#495e57] hover:text-white transition-colors duration-300 sm:py-3 sm:px-6 md:py-4 md:px-8 md:text-2xl lg:px-10 lg:text-3xl"
          >
            Book Table
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
