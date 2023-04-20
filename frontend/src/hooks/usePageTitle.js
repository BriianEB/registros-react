import { useEffect } from 'react';


function usePageTitle(title) {
    useEffect(function () {
        document.title = title;
    }, [title]);
}

export default usePageTitle;
