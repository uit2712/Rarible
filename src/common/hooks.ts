import { useEffect, useState } from "react";

type displayType = 'none' | 'block';
export function useDisplayType(isVisible: boolean) {
    const [result, setResult] = useState<displayType>('none');

    useEffect(() => {
        if (isVisible === true) {
            setResult('block');
        } else {
            setResult('none');
        }
    }, [isVisible]);

    return result;
}