export default {
  fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/api/health") {
      if (request.method !== "GET") {
        return new Response(JSON.stringify({ status: 405, error: "Method Not Allowed" }), {
          status: 405,
          headers: { "Allow": "GET", "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" },
        });
      }

      return new Response(JSON.stringify({ status: "ok", service: "xuan-space" }), {
        headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" },
      });
    }

    if (url.pathname.startsWith("/api/")) {
      return new Response(JSON.stringify({ status: 404, error: "Not Found" }), {
        status: 404,
        headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" },
      });
    }
		return new Response(null, { status: 404 });
  },
} satisfies ExportedHandler<Env>;
