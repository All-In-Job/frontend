import { RefObject, useEffect, useRef, useState } from 'react';

export type PopupControllerState = {
  popupRef: RefObject<HTMLElement>;
  buttonRef: RefObject<HTMLElement>;
  isShow: boolean;
  setIsShow: (isShow: boolean) => void;
};

type UsePopup = () => PopupControllerState;

const usePopup: UsePopup = (initIsShow = false) => {
  const popupRef = useRef<HTMLElement | null>(null);
  const buttonRef = useRef<HTMLElement | null>(null);
  const [isShow, setIsShow] = useState(initIsShow);

  useEffect(() => {
    //팝업 바깥을 클릭하면 isShow 가 false가 됨.
    //팝업을 여닫는 버튼을 클릭하면 이벤트가 작동하지 않음.
    const handleMouseClick = (event: MouseEvent) => {
      if (buttonRef.current?.contains(event.target as Node)) {
        return;
      }

      if (popupRef.current?.contains(event.target as Node) === false) {
        setIsShow(false);
      }
    };

    window.addEventListener('click', handleMouseClick);

    return () => {
      window.removeEventListener('click', handleMouseClick);
    };
  }, []);

  return { isShow, setIsShow, popupRef, buttonRef };
};

export default usePopup;
