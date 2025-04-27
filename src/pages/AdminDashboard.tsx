
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";

export default function AdminDashboard() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [stories, setStories] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchBookingsAndStories();
  }, []);

  const fetchBookingsAndStories = async () => {
    try {
      const [{ data: bookingsData }, { data: storiesData }] = await Promise.all([
        supabase.from("bookings").select("*").order("created_at", { ascending: false }),
        supabase.from("stories").select("*").order("created_at", { ascending: false })
      ]);

      setBookings(bookingsData || []);
      setStories(storiesData || []);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to load dashboard data");
    } finally {
      setIsLoading(false);
    }
  };

  const approveStory = async (id: string) => {
    try {
      const { error } = await supabase
        .from("stories")
        .update({ approved: true })
        .eq("id", id);

      if (error) throw error;

      toast.success("Story approved successfully");
      fetchBookingsAndStories();
    } catch (error) {
      console.error("Error approving story:", error);
      toast.error("Failed to approve story");
    }
  };

  const updateBookingStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from("bookings")
        .update({ status })
        .eq("id", id);

      if (error) throw error;

      toast.success(`Booking marked as ${status}`);
      fetchBookingsAndStories();
    } catch (error) {
      console.error("Error updating booking:", error);
      toast.error("Failed to update booking status");
    }
  };

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      {/* Bookings Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Recent Bookings</h2>
        <div className="rounded-lg border bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell>{booking.name}</TableCell>
                  <TableCell>{booking.email}</TableCell>
                  <TableCell>{booking.phone}</TableCell>
                  <TableCell>{booking.status}</TableCell>
                  <TableCell>
                    <select
                      value={booking.status}
                      onChange={(e) => updateBookingStatus(booking.id, e.target.value)}
                      className="border rounded p-1"
                    >
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Stories Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Submitted Stories</h2>
        <div className="rounded-lg border bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Story Preview</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {stories.map((story) => (
                <TableRow key={story.id}>
                  <TableCell>{story.name}</TableCell>
                  <TableCell>{story.email}</TableCell>
                  <TableCell>{story.story.substring(0, 100)}...</TableCell>
                  <TableCell>{story.approved ? "Approved" : "Pending"}</TableCell>
                  <TableCell>
                    {!story.approved && (
                      <button
                        onClick={() => approveStory(story.id)}
                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                      >
                        Approve
                      </button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
