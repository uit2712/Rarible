import React, {
    useEffect,
    useContext,
    useRef,
} from 'react';

interface ICreateSubscription {
    subscribe: (fn: Function) => Set<any>;
    unsubscribe: (fn: Function) => boolean;
    emit: (...args: any[]) => void;
}
const createSubscription = (): ICreateSubscription => {
    const subscribers = new Set<any>();
    const subscribe = (fn: Function) => subscribers.add(fn);
    const unsubscribe = (fn: Function) => subscribers.delete(fn);
    const emit = (...args: any[]) => subscribers.forEach((c: Function) => c(...args));
    return {
        subscribe,
        unsubscribe,
        emit
    };
};

const EmitterContext = React.createContext(createSubscription());

function createEmitterProvider(subscription: ICreateSubscription) {
    return ({ children }: { children: Element }) => (
        <EmitterContext.Provider value={subscription}>
            {children}
        </EmitterContext.Provider>
    )
}

export const useEmitter = () => {
    const emitter = useRef(createSubscription());
    const Provider = createEmitterProvider(emitter.current);
    return [emitter.current.emit, Provider];
};

export const useSubscriber = (fn: Function, listenTo = undefined) => {
    const ctx = useContext(EmitterContext);
    useEffect(() => {
        ctx.subscribe(fn);
        return () => {
            ctx.unsubscribe(fn);
        };
    }, listenTo);
};
