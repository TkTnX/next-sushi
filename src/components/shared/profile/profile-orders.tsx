import { TabsContent } from "@/components/ui/tabs";
import * as React from "react";
import ProfileStarter from "./profile-starter";
import { Order } from "@prisma/client";
import { useSession } from "next-auth/react";
import { Api } from "@/services/api-client";
import ProfileOrdersInfo from "./profile-orders-info";
import WhiteBox from "../white-box";
import OrderInfoItems from "../checkout/order-info-items";
import ProfileOrdersItem from "./profile-orders-item";
import { Skeleton } from "@/components/ui/skeleton";

interface IProfileOrdersProps {
  personalValue: string;
}

const ProfileOrders: React.FunctionComponent<IProfileOrdersProps> = ({
  personalValue,
}) => {
  const [openId, setOpenId] = React.useState<number | null>(null);
  const [orders, setOrders] = React.useState<Order[]>([]);
  const [loading, setLoading] = React.useState(true);
  const { data: session } = useSession();

  React.useEffect(() => {
    setLoading(true);
    async function getOrders() {
      if (session) {
        const orders = await Api.order.getAll();
        setOrders(orders ?? []);

        setLoading(false)
        return orders;
      }
    }

    getOrders();
  }, [session]);

  if (loading) {
    return (
      <div className="grid gap-3">
        {[...Array(6)].map((_, index) => (
          <Skeleton key={index} className="w-full h-[112px] rounded-xl animate-pulse bg-[#c2c2c3]" />
        ))}
      </div>
    );
  }
  return (
    <TabsContent value={personalValue} className="flex-1">
      {!loading && orders.length === 0 ? (
        <ProfileStarter
          title="История заказов"
          imageUrl="00.svg"
          subtitle="У вас нет заказов"
          description="Переходите в интересующую вас категорию и сделайте свой первый заказ"
        />
      ) : (
        <div className="grid gap-3">
          {orders.slice(0, 6).map((order) => (
            <WhiteBox key={order.id}>
              <ProfileOrdersInfo
                openId={openId !== null ? openId : 0}
                setOpenId={setOpenId}
                order={order}
              />
              {openId === order.id && (
                <>
                  <OrderInfoItems className="mt-8" order={order} />
                  <div className="mt-5">
                    {typeof order.items === "string" &&
                      JSON.parse(order.items).map((item: any) => (
                        <ProfileOrdersItem
                          key={item.productItem.id}
                          imageUrl={item.productItem.imageUrl}
                          title={item.productItem.name}
                          weight={item.productItem.weight}
                          price={item.productItem.price}
                          quantity={item.quantity}
                        />
                      ))}
                  </div>
                </>
              )}
            </WhiteBox>
          ))}
        </div>
      )}
    </TabsContent>
  );
};

export default ProfileOrders;
