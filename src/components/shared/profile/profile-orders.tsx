import { TabsContent } from '@/components/ui/tabs';
import * as React from 'react';
import ProfileStarter from './profile-starter';

interface IProfileOrdersProps {
  personalValue: string
}

const ProfileOrders: React.FunctionComponent<IProfileOrdersProps> = ({ personalValue }) => {
    

    return (
      <TabsContent  value={personalValue} className='flex-1'>
        <ProfileStarter
          title="История заказов"
          imageUrl="00.svg"
          subtitle="У вас нет заказов"
          description="Переходите в интересующую вас категорию и сделайте свой первый заказ"
        />
      </TabsContent>
    );
};

export default ProfileOrders;
