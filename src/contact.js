function createForm() {
    const form = document.createElement('form');
    form.classList.add('form');

    const topSection = document.createElement('div');
    topSection.classList.add('top-section');

    const bottomSection = document.createElement('div');
    bottomSection.classList.add('bottom-section');

    const firstName = document.createElement('input');
    firstName.classList.add('form-input');
    firstName.type = 'text';
    firstName.placeholder = 'First Name';
    firstName.name = 'first-name';

    const lastName = document.createElement('input');
    lastName.classList.add("form-input");
    lastName.type = 'text';
    lastName.placeholder = 'Last Name';
    lastName.name = 'last-name';

    const email = document.createElement('input');
    email.classList.add("form-input");
    email.type = 'email';
    email.name = 'email-input';
    email.placeholder = 'Enter your email!';

    const phoneNumber = document.createElement('input');
    phoneNumber.classList.add("form-input");
    phoneNumber.type = 'tel';
    phoneNumber.name = 'phone-number';
    phoneNumber.placeholder = 'Enter your phone number!';

    topSection.append(firstName);
    topSection.append(lastName);
    topSection.append(email);
    topSection.append(phoneNumber);

    const aboutSection = document.createElement('textarea');
    aboutSection.classList.add('about-area');
    aboutSection.name = 'comments';
    aboutSection.classList.add('comments-section');
    aboutSection.placeholder = 'Place any comments about the restaurant or your experience.';

    const submitBtn = document.createElement('button');
    submitBtn.classList.add('submit-button');
    submitBtn.textContent = 'Submit';

    bottomSection.append(aboutSection);
    bottomSection.append(submitBtn);

    form.append(topSection);
    form.append(bottomSection);

    return form;

}

function contact() {
    const content = document.querySelector('#content');

    const container = document.createElement('div');
    container.classList.add('contact-container');

    const heading = document.createElement('h2');
    heading.classList.add('contact-heading');
    heading.textContent = 'Contact Us!';

    container.appendChild(heading);
    container.appendChild(createForm());

    content.appendChild(container);
}

export { contact };