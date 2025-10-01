export async function request<T>(url: string, init?: RequestInit): Promise<T> {
	const controller = new AbortController();
	const timeout = setTimeout(() => controller.abort(), 15000);
	try {
		const response = await fetch(url, { ...init, signal: controller.signal });
		if (!response.ok) {
			let body = '';
			try {
				body = await response.text();
			} catch {
				throw new Error(`HTTP ${response.status} ${response.statusText}${body ? ` - ${body}` : ''}`);
			}
		}
		return (await response.json()) as T;
	} finally {
		clearTimeout(timeout);
	}
}
