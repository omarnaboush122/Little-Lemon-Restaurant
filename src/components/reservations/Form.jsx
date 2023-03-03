const Form = () => {
  return (
    <section>
      <article>
        <form>
          <div>
            <label htmlFor="FirstName">First Name</label>
            <input type="text" placeholder="e.g. Omar" id="FirstName" />
          </div>
          <div>
            <label htmlFor="LastName">Last Name</label>
            <input type="text" placeholder="e.g. Naboush" id="LastName" />
          </div>
          <div>
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              placeholder="e.g. omarnaboush509@gmail.com"
              id="Email"
            />
          </div>
          <div>
            <label htmlFor="PhoneNumber">Phone Number</label>
            <input type="number" placeholder="e.g. 81 346 307" id="PhoneNumber" />
          </div>
          <div>
            <label htmlFor="NumberofPeople">Number of People</label>
            <input type="number" id="NumberofPeople" />
          </div>
          <div>
            <label htmlFor="SelectDate">Select Date</label>
            <input type="date" id="SelectDate" />
          </div>
          <div>
            <label htmlFor="SelectTime">Select Time</label>
            <select id="SelectTime">
              <option value="17:00">17:00</option>
              <option value="17:30">17:30</option>
              <option value="19:30">19:30</option>
              <option value="21:00">21:00</option>
              <option value="21:30">21:30</option>
            </select>
          </div>
          <div>
            <label htmlFor="Occasion">Occasion</label>
            <select id="Occasion">
              <option value="none">None</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="engagment">Engagment</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="Seatingpreferences">Seating preferences</label>
            <select id="Seatingpreferences">
              <option value="none">None</option>
              <option value="indoors">Indoors</option>
              <option value="outdoors(Patio)">Outdoors(Patio)</option>
              <option value="outdoors(SideWalk)">Outdoors(SideWalk)</option>
            </select>
          </div>
          <div>
            <label htmlFor="AdditionalComments">Additional Comments</label>
            <textarea id="AdditionalComments" cols="30" rows="10" placeholder="Additional Comments"></textarea>
          </div>
        </form>
      </article>
    </section>
  );
};

export default Form;
