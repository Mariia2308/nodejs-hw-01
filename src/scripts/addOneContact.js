import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from  './../utils/createFakeContact.js';

export const addOneContact = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        let contacts = JSON.parse(data);

        const newContact = createFakeContact();

        contacts.push(newContact);

        await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');

        console.log('Контакт успішно додано до бази даних.');
    } catch (error) {
        console.error('Помилка під час додавання контакту:', error);
    }
};

await addOneContact();