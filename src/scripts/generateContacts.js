import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        let contacts = JSON.parse(data);


        for (let i = 0; i < number; i++) {
            const newContact = createFakeContact();
            contacts.push(newContact);
        }

        await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
        console.log(`${number} контактів успішно згенеровано та додано до бази даних.`);
    
    } catch (err) {
        console.error('Помилка при генерації файлу:', err);
    }
};

await generateContacts(2);
