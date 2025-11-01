export default function SubscriptionCard({ sub }: any) {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
      <div className="flex justify-between mb-2">
        <h2 className="font-semibold">{sub.merchant}</h2>
        <span className="text-xs text-gray-400">{sub.status}</span>
      </div>
      <p className="text-sm">${sub.price}/mo</p>
      {sub.next_renewal_date && (
        <p className="text-xs text-gray-400">
          Renews: {new Date(sub.next_renewal_date).toLocaleDateString()}
        </p>
      )}
    </div>
  );
}
