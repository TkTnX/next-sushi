import * as React from 'react';

interface INotificationsItemProps {
  title: string;
  message: string
}

const NotificationsItem: React.FunctionComponent<INotificationsItemProps> = ({
  title,
  message,
}) => {
  return (
    <div className="bg-[#F5F5F7] py-3 px-4 rounded-xl">
      <h4 className="font-semibold">{title}</h4>
      <p className='text-[#686870] mt-3'>{message}</p>
    </div>
  );
};

export default NotificationsItem;
