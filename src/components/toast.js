
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = (text, type) => {
    if(type === 'success') {
        toast.success(text, {
            theme: "dark",
        });
    }else {
        toast.error(text, {
            theme: "dark",
        });
    }
};
