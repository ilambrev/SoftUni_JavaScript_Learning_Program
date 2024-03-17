function lockedProfile() {
    const baseUrl = 'http://localhost:3030/jsonstore/advanced/profiles';

    const mainContainer = document.querySelector('#main');
    const profileElement = document.querySelector('#main .profile');

    mainContainer.textContent = '';

    fetch(baseUrl)
        .then(res => res.json())
        .then(profilesObject => {
            Object.values(profilesObject)
                .forEach((p, i) => {
                    const profileData = profileElement.cloneNode(true);
                    profileData.querySelector('input[type="radio"][value="lock"]').checked = true;
                    profileData.querySelector('input[type="radio"][value="lock"]').name = `user${i + 1}Locked`;
                    profileData.querySelector('input[type="radio"][value="unlock"]').name = `user${i + 1}Locked`;
                    profileData.querySelector('input[type="text"][name="user1Username"]').value = `${p.username}`;
                    profileData.querySelector('input[type="text"][name="user1Username"]').name = `user${i + 1}Username`;
                    profileData.querySelector('input[name="user1Email"]').value = `${p.email}`;
                    profileData.querySelector('input[name="user1Email"]').name = `user${i + 1}Email`;
                    profileData.querySelector('input[name="user1Age"]').value = `${p.age}`;
                    profileData.querySelector('input[name="user1Age"]').type = 'email';
                    profileData.querySelector('input[name="user1Age"]').name = `user${i + 1}Age`;
                    profileData.querySelector('button').addEventListener('click', showMore);
                    profileData.querySelector('div.user1Username').id = `user${i + 1}HiddenFields`;
                    profileData.querySelector('div.user1Username').style.display = 'none';
                    profileData.querySelector('div.user1Username').removeAttribute('class');

                    mainContainer.appendChild(profileData);
                });
        })
        .catch(err => console.log(err));

    function showMore(e) {
        const actionButton = e.currentTarget;
        const hiddenInfoContainer = actionButton.parentElement.querySelector('div');
        const unlockRadioButton = actionButton.parentElement.querySelector('input[value="unlock"]');

        if (unlockRadioButton.checked) {
            if (actionButton.textContent === 'Show more') {
                actionButton.textContent = 'Hide it';
                hiddenInfoContainer.style.display = 'block';
            } else {
                actionButton.textContent = 'Show more';
                hiddenInfoContainer.style.display = 'none';
            }

        }
    }
}