FROM mcr.microsoft.com/azure-functions/node:3.0-node14-core-tools

# Install additional dependencies
RUN apt-get update && apt-get install -y \
    curl \
    wget \
    unzip \
    && rm -rf /var/lib/apt/lists/*

# Install Node.js
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs

# Install Azure Functions Core Tools
RUN curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gp
RUN sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/microsoft-ubuntu-$(lsb_release -cs)-prod $(lsb_release -cs) main" > /etc/apt/sources.list.d/dotnetdev.list'
RUN cat  /etc/apt/sources.list.d/dotnetdev.list
# Set the working directory
WORKDIR /app

# Copy the application files
COPY . /home/app

# Install application dependencies
RUN npm install

# Expose the function port
EXPOSE 7071

# Start the Azure Functions host
CMD ["func", "start"]
